"""Bounded read-only sampling of the official Profeco QQP archive; never publish prices."""
import csv
from collections import Counter
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
MAX_PERIOD_ROWS = 1_500_000
MAX_MEMBER = 400_000_000
MAX_EVIDENCE = 10
REQUIRED = ("producto", "presentacion", "marca", "precio", "fecha_registro",
            "nombre_comercial", "direccion", "estado", "municipio")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise ValueError("Unexpected archive redirect")


def download_archive(url, output, expected_size, expected_etag=None):
    if not re.fullmatch(re.escape(BASE) + r"20\d{2}\.rar", url):
        raise ValueError("Unexpected archive URL")
    if not isinstance(expected_size, int) or not 0 < expected_size <= MAX_ARCHIVE:
        raise ValueError("Invalid archive size")
    digest = hashlib.sha256()
    total = 0
    with build_opener(NoRedirect()).open(Request(url, headers={"User-Agent": "NutriChilango-SourceAudit/1.0"}), timeout=20) as response:
        if response.status != 200 or response.geturl() != url:
            raise ValueError("Unexpected archive response")
        if expected_etag and response.headers.get("ETag") != expected_etag:
            raise ValueError("Archive ETag changed since metadata inspection")
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


def read_first_csv(path, target=None, output=None):
    """Read the first CSV prefix or one exact period to a caller-controlled temporary file."""
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
            if filetype(entry) != 0o100000 or not member.lower().endswith(".csv") or (target is not None and member != target):
                if skip(archive) < 0:
                    raise ValueError("Cannot skip archive member")
                continue
            length = size(entry)
            if not 0 < length <= MAX_MEMBER:
                raise ValueError("CSV member outside size contract")
            buffer = C.create_string_buffer(65536)
            if output is not None:
                digest = hashlib.sha256()
                total = 0
                with open(output, "wb") as stream:
                    while total < length:
                        count = read(archive, buffer, min(len(buffer), length - total))
                        if count <= 0:
                            raise ValueError("Incomplete period member")
                        chunk = buffer.raw[:count]
                        stream.write(chunk)
                        digest.update(chunk)
                        total += count
                    if read(archive, buffer, 1) != 0:
                        raise ValueError("Period member exceeded declared size")
                return member, length, digest.hexdigest()
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


def read_recent_csv(path, coverage_end, output):
    # QQP observed archive convention: month and half-month (Q1/Q2), exact path.
    half = 1 if coverage_end.day <= 15 else 2
    target = f"{coverage_end.year}/{coverage_end.month:02d}-{coverage_end.year}_Q{half}.csv"
    return read_first_csv(path, target=target, output=output)


def normalize(value):
    return "".join(c for c in unicodedata.normalize("NFD", value.strip().upper()) if unicodedata.category(c) != "Mn")


def sample_rows(raw, coverage_end):
    try:
        decoded = raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        decoded = raw.decode("cp1252")
    return scan_rows(io.StringIO(decoded), coverage_end, MAX_ROWS)


DATE_SHAPES = (
    ("iso-date", r"\d{4}-\d{2}-\d{2}"),
    ("iso-datetime", r"\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?"),
    ("day-month-year-slash", r"\d{1,2}/\d{1,2}/\d{4}"),
    ("day-month-year-slash-time", r"\d{1,2}/\d{1,2}/\d{4} \d{1,2}:\d{2}(?::\d{2})?"),
    ("year-month-day-slash", r"\d{4}/\d{1,2}/\d{1,2}"),
    ("two-two-four-hyphen", r"\d{1,2}-\d{1,2}-\d{4}"),
    ("compact-eight-digits", r"\d{8}"),
)
PRICE_SHAPES = (
    ("decimal-dot", r"[+-]?\d+(?:\.\d+)?"),
    ("decimal-comma", r"[+-]?\d+,\d+"),
    ("currency-symbol", r"\$\s*[0-9,.]+"),
)


def format_shape(value, patterns):
    stripped = value.strip()
    if not stripped:
        return "empty"
    for label, pattern in patterns:
        if re.fullmatch(pattern, stripped):
            return label
    return "other"


def scan_rows(stream, coverage_end, max_rows, coverage_start=None):
    rows = csv.DictReader(stream, strict=True)
    if not rows.fieldnames or len(set(rows.fieldnames)) != len(rows.fieldnames) or not set(REQUIRED) <= set(rows.fieldnames):
        raise ValueError("Unexpected observation CSV schema")
    counts = {"rowsExamined": 0, "cdmxRows": 0, "validSyntaxRows": 0, "rejectedRows": 0}
    evidence = []
    rejection_reasons = Counter()
    missing_field_counts = Counter()
    date_formats = Counter()
    price_formats = Counter()
    def reject(reason):
        counts["rejectedRows"] += 1
        rejection_reasons[reason] += 1
    for number, row in enumerate(rows, start=2):
        if counts["rowsExamined"] >= max_rows:
            if coverage_start is not None:
                raise ValueError("Recent period exceeds row bound")
            break
        counts["rowsExamined"] += 1
        if None in row or any(row.get(field) is None for field in REQUIRED):
            reject("row-shape")
            continue
        if normalize(row["estado"]) not in {"CIUDAD DE MEXICO", "DISTRITO FEDERAL"}:
            continue
        counts["cdmxRows"] += 1
        date_formats[format_shape(row["fecha_registro"], DATE_SHAPES)] += 1
        price_formats[format_shape(row["precio"], PRICE_SHAPES)] += 1
        missing = [field for field in REQUIRED if not row[field].strip()]
        if missing:
            missing_field_counts.update(missing)
            reject("missing-required-fields")
            continue
        try:
            price = Decimal(row["precio"])
            if not price.is_finite() or price <= 0:
                raise ValueError("Invalid price")
        except (ValueError, InvalidOperation):
            reject("invalid-price")
            continue
        try:
            observed = datetime.fromisoformat(row["fecha_registro"]).date()
        except ValueError:
            reject("invalid-date")
            continue
        if observed > coverage_end or (coverage_start is not None and observed < coverage_start):
            reject("date-outside-coverage")
            continue
        counts["validSyntaxRows"] += 1
        if len(evidence) < MAX_EVIDENCE:
            evidence.append({"recordNumber": number, "rawFields": {key: row[key] for key in REQUIRED},
                             "observedDate": observed.isoformat(),
                             "currencyVerified": False, "publicationEligible": False})
    return {"columns": rows.fieldnames, **counts, "sample": evidence,
            "rejectionReasons": dict(rejection_reasons), "missingFieldCounts": dict(missing_field_counts),
            "dateFormats": dict(date_formats), "priceFormats": dict(price_formats)}


def sample_recent_file(path, coverage_end):
    start = coverage_end.replace(day=1 if coverage_end.day <= 15 else 16)
    for encoding in ("utf-8-sig", "cp1252"):
        try:
            with open(path, encoding=encoding, newline="") as stream:
                result = scan_rows(stream, coverage_end, MAX_PERIOD_ROWS, start)
                return {"periodStart": start.isoformat(), "periodEnd": coverage_end.isoformat(),
                        "encoding": encoding, **result}
        except UnicodeDecodeError:
            if encoding == "cp1252":
                raise
    raise ValueError("No supported period encoding")


def main(metadata_path, output_path):
    report = {"checkedAt": datetime.now(timezone.utc).isoformat(), "catalogChanged": False,
              "publicationEligible": False, "sampling": "exact latest declared half-month, bounded full member scan; evidence is not a representative retail sample"}
    try:
        source = json.loads(Path(metadata_path).read_text(encoding="utf-8"))["sources"][0]
        if source["status"] != "metadata-verified":
            raise ValueError("No verified metadata")
        with tempfile.TemporaryDirectory() as temporary:
            path = Path(temporary) / "source.rar"
            coverage_end = date.fromisoformat(source["coverageEnd"])
            digest, length = download_archive(source["archiveUrl"], path, source["archiveBytesReported"], source.get("archiveETag"))
            period = Path(temporary) / "period.csv"
            member, member_size, member_digest = read_recent_csv(path, coverage_end, period)
            report.update({"status": "sample-inspected", "sourceUrl": source["archiveUrl"],
                           "archiveSha256": digest, "archiveBytes": length,
                           "member": member, "memberBytesReported": member_size,
                           "memberSha256": member_digest,
                           **sample_recent_file(period, coverage_end)})
    except (OSError, ValueError, KeyError, IndexError, csv.Error) as error:
        report.update({"status": "unavailable", "errorType": type(error).__name__})
    Path(output_path).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: value for key, value in report.items() if key != "sample"}, ensure_ascii=False))
    return 0 if report["status"] == "sample-inspected" else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1], sys.argv[2]))
