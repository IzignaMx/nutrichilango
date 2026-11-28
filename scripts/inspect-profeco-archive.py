"""Bounded read-only sampling of the official Profeco QQP archive; never publish prices."""
import csv
import ctypes as C
import ctypes.util
import hashlib
import io
import json
import re
import sys
import tempfile
import unicodedata
from datetime import date, datetime, timezone
from decimal import Decimal, InvalidOperation
from pathlib import Path
from urllib.request import HTTPRedirectHandler, Request, build_opener

BASE = "https://datos.profeco.gob.mx/docs/qqp/"
MAX_ARCHIVE = 200_000_000
MAX_SAMPLE = 4_000_000
MAX_ROWS = 2000
MAX_EVIDENCE = 10
REQUIRED = ("producto", "presentacion", "marca", "precio", "fecha_registro",
            "nombre_comercial", "direccion", "estado", "municipio")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise ValueError("Unexpected archive redirect")


def download_archive(url, output, expected_size):
    if not re.fullmatch(re.escape(BASE) + r"20\d{2}\.rar", url):
        raise ValueError("Unexpected archive URL")
    if not isinstance(expected_size, int) or not 0 < expected_size <= MAX_ARCHIVE:
        raise ValueError("Invalid archive size")
    digest = hashlib.sha256()
    total = 0
    with build_opener(NoRedirect()).open(Request(url, headers={"User-Agent": "NutriChilango-SourceAudit/1.0"}), timeout=20) as response:
        if response.status != 200 or response.geturl() != url:
            raise ValueError("Unexpected archive response")
        with open(output, "wb") as file:
            while chunk := response.read(256 * 1024):
                total += len(chunk)
                if total > expected_size or total > MAX_ARCHIVE:
                    raise ValueError("Archive exceeded declared limit")
                digest.update(chunk)
                file.write(chunk)
    if total != expected_size:
        raise ValueError("Archive size mismatch")
    return digest.hexdigest(), total


def read_first_csv(path):
    """Read only the first CSV member, never extract any file or trust member paths."""
    library = ctypes.util.find_library("archive")
    if not library:
        raise OSError("libarchive unavailable")
    lib = C.CDLL(library)
    def bind(name, args, result):
        method = getattr(lib, name)
        method.argtypes, method.restype = args, result
        return method
    ptr, integer = C.c_void_p, C.c_int
    create = bind("archive_read_new", [], ptr)
    supports_filter = bind("archive_read_support_filter_all", [ptr], integer)
    supports_format = bind("archive_read_support_format_all", [ptr], integer)
    open_file = bind("archive_read_open_filename", [ptr, C.c_char_p, C.c_size_t], integer)
    next_entry = bind("archive_read_next_header", [ptr, C.POINTER(ptr)], integer)
    name = bind("archive_entry_pathname", [ptr], C.c_char_p)
    filetype = bind("archive_entry_filetype", [ptr], integer)
    size = bind("archive_entry_size", [ptr], C.c_longlong)
    read = bind("archive_read_data", [ptr, ptr, C.c_size_t], C.c_ssize_t)
    skip = bind("archive_read_data_skip", [ptr], integer)
    free = bind("archive_read_free", [ptr], integer)
    archive = create()
    if not archive:
        raise OSError("Could not allocate archive")
    try:
        if supports_filter(archive) < 0 or supports_format(archive) < 0 or open_file(archive, str(path).encode(), 65536) != 0:
            raise ValueError("Cannot open archive")
        entry = ptr()
        for _ in range(64):
            status = next_entry(archive, C.byref(entry))
            if status == 1:
                break
            if status != 0:
                raise ValueError("Cannot read archive header")
            member = (name(entry) or b"").decode("utf-8", errors="strict")
            if filetype(entry) != 0o100000 or not member.lower().endswith(".csv"):
                if skip(archive) < 0:
                    raise ValueError("Cannot skip archive member")
                continue
            length = size(entry)
            if not 0 < length <= 400_000_000:
                raise ValueError("CSV member outside size contract")
            buffer = C.create_string_buffer(65536)
            chunks = []
            total = 0
            while total < min(MAX_SAMPLE, length):
                count = read(archive, buffer, min(len(buffer), MAX_SAMPLE - total, length - total))
                if count < 0:
                    raise ValueError("Archive read failure")
                if count == 0:
                    break
                chunks.append(buffer.raw[:count])
                total += count
            raw = b"".join(chunks)
            if total != min(MAX_SAMPLE, length):
                raise ValueError("Partial archive member")
            if total < length:
                raw = raw[:raw.rfind(b"\n") + 1]
            return member, length, raw
        raise ValueError("No CSV member within bounded search")
    finally:
        free(archive)


def normalize(value):
    return "".join(c for c in unicodedata.normalize("NFD", value.strip().upper()) if unicodedata.category(c) != "Mn")


def sample_rows(raw, coverage_end):
    try:
        decoded = raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        decoded = raw.decode("cp1252")
    rows = csv.DictReader(io.StringIO(decoded), strict=True)
    if not rows.fieldnames or len(set(rows.fieldnames)) != len(rows.fieldnames) or not set(REQUIRED) <= set(rows.fieldnames):
        raise ValueError("Unexpected observation CSV schema")
    counts = {"rowsExamined": 0, "cdmxRows": 0, "validSyntaxRows": 0, "rejectedRows": 0}
    evidence = []
    for number, row in enumerate(rows, start=2):
        if counts["rowsExamined"] >= MAX_ROWS:
            break
        counts["rowsExamined"] += 1
        if None in row or any(row.get(field) is None for field in REQUIRED):
            counts["rejectedRows"] += 1
            continue
        if normalize(row["estado"]) not in {"CIUDAD DE MEXICO", "DISTRITO FEDERAL"}:
            continue
        counts["cdmxRows"] += 1
        try:
            if not all(row[field].strip() for field in REQUIRED):
                raise ValueError("Missing required value")
            price = Decimal(row["precio"])
            observed = datetime.fromisoformat(row["fecha_registro"]).date()
            if not price.is_finite() or price <= 0 or observed > coverage_end:
                raise ValueError("Invalid observation")
        except (ValueError, InvalidOperation):
            counts["rejectedRows"] += 1
            continue
        counts["validSyntaxRows"] += 1
        if len(evidence) < MAX_EVIDENCE:
            evidence.append({"recordNumber": number, "rawFields": {key: row[key] for key in REQUIRED},
                             "observedDate": observed.isoformat(),
                             "currencyVerified": False, "publicationEligible": False})
    return {"columns": rows.fieldnames, **counts, "sample": evidence}


def main(metadata_path, output_path):
    report = {"checkedAt": datetime.now(timezone.utc).isoformat(), "catalogChanged": False,
              "publicationEligible": False, "sampling": "first CSV and first 2000 records, not complete or representative"}
    try:
        source = json.loads(Path(metadata_path).read_text(encoding="utf-8"))["sources"][0]
        if source["status"] != "metadata-verified":
            raise ValueError("No verified metadata")
        with tempfile.TemporaryDirectory() as temporary:
            path = Path(temporary) / "source.rar"
            digest, length = download_archive(source["archiveUrl"], path, source["archiveBytesReported"])
            member, member_size, raw = read_first_csv(path)
            report.update({"status": "sample-inspected", "sourceUrl": source["archiveUrl"],
                           "archiveSha256": digest, "archiveBytes": length,
                           "member": member, "memberBytesReported": member_size,
                           "sampleBytes": len(raw), "sampleSha256": hashlib.sha256(raw).hexdigest(),
                           **sample_rows(raw, date.fromisoformat(source["coverageEnd"]))})
    except (OSError, ValueError, KeyError, IndexError, csv.Error) as error:
        report.update({"status": "unavailable", "errorType": type(error).__name__})
    Path(output_path).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: value for key, value in report.items() if key != "sample"}, ensure_ascii=False))
    return 0 if report["status"] == "sample-inspected" else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1], sys.argv[2]))
