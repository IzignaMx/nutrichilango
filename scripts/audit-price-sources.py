"""Read-only availability and provenance audit; never writes catalog prices."""
import csv
import hashlib
import io
import json
import sys
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

BASE = "https://datos.profeco.gob.mx/docs/qqp/"
META = BASE + "Metadatos.csv"
DICTIONARY = BASE + "QQP_diccionario_dataset.csv"
REQUIRED = {"producto", "presentacion", "marca", "precio", "fecha_registro",
            "nombre_comercial", "direccion", "estado", "municipio"}
LIMIT = 128 * 1024


def decode_csv(raw):
    try:
        return raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        return raw.decode("cp1252")


def parse_metadata(raw, today):
    rows = list(csv.reader(io.StringIO(decode_csv(raw)), strict=True))
    if not rows or rows[0] != ["Metadato", "Descripción"]:
        raise ValueError("Unexpected metadata schema")
    if any(len(row) != 2 for row in rows[1:]):
        raise ValueError("Invalid metadata rows")
    fields = dict(rows[1:])
    if len(fields) != len(rows) - 1 or "Profeco" not in fields.get("Autor", ""):
        raise ValueError("Invalid publisher or duplicate metadata")
    start, end = map(date.fromisoformat, fields["Cobertura temporal"].split(" a "))
    updated = datetime.strptime(fields["Última modificación"], "%d/%m/%Y %H:%M").date()
    if not start <= end <= updated <= today:
        raise ValueError("Invalid coverage dates")
    return {"coverageStart": start.isoformat(), "coverageEnd": end.isoformat(),
            "publisherUpdatedDate": updated.isoformat(),
            "coverageAgeDays": (today - end).days,
            "frequency": fields["Temporalidad de actualización"]}


def parse_dictionary(raw):
    reader = csv.DictReader(io.StringIO(decode_csv(raw)), strict=True)
    if reader.fieldnames != ["Variable", "Tipo de dato", "Nombre corto", "Descripción"]:
        raise ValueError("Unexpected dictionary schema")
    variables = [row["Variable"] for row in reader]
    if not REQUIRED <= set(variables) or len(variables) != len(set(variables)):
        raise ValueError("Missing or duplicate dictionary variables")
    return sorted(variables)


def dictionary_diagnostics(raw):
    parse_dictionary(raw)
    rows = csv.DictReader(io.StringIO(decode_csv(raw)), strict=True)
    return {row["Variable"]: {"type": row["Tipo de dato"][:200], "description": row["Descripción"][:500]}
            for row in rows if row["Variable"] in {"precio", "fecha_registro"}}


def request(url, method="GET"):
    with urlopen(Request(url, method=method, headers={
        "User-Agent": "NutriChilango-SourceAudit/1.0"
    }), timeout=20) as response:
        if response.status != 200 or response.geturl() != url:
            raise ValueError("Unexpected response or redirect")
        if method == "HEAD":
            return dict(response.headers.items())
        raw = response.read(LIMIT + 1)
        if not raw or len(raw) > LIMIT:
            raise ValueError("Empty or oversized CSV")
        return raw


def collect(today):
    metadata = request(META)
    dictionary = request(DICTIONARY)
    coverage = parse_metadata(metadata, today)
    variables = parse_dictionary(dictionary)
    archive = BASE + f"{date.fromisoformat(coverage['coverageEnd']).year}.rar"
    headers = {k.lower(): v for k, v in request(archive, "HEAD").items()}
    size = int(headers.get("content-length", "0"))
    if not 0 < size <= 200_000_000 or headers.get("content-type", "").split(";")[0] not in {
        "application/vnd.rar", "application/x-rar-compressed", "application/octet-stream"
    }:
        raise ValueError("Unexpected archive metadata")
    return {"source": "Profeco QQP", "channel": "retail", "status": "metadata-verified",
            "metadataUrl": META, "dictionaryUrl": DICTIONARY, "archiveUrl": archive,
            "metadataSha256": hashlib.sha256(metadata).hexdigest(),
            "dictionarySha256": hashlib.sha256(dictionary).hexdigest(),
            "archiveBytesReported": size, "archiveETag": headers.get("etag"),
            "archiveLastModified": headers.get("last-modified"),
            "variables": variables, "dictionaryDiagnostics": dictionary_diagnostics(dictionary), **coverage, "pricesValidated": 0,
            "publicationEligible": False}


def main(output):
    now = datetime.now(timezone.utc)
    report = {"checkedAt": now.isoformat(), "catalogChanged": False, "sources": []}
    try:
        report["sources"].append(collect(now.date()))
    except (OSError, ValueError, KeyError, csv.Error) as error:
        report["sources"].append({"source": "Profeco QQP", "status": "unavailable",
                                  "errorType": type(error).__name__, "publicationEligible": False})
    Path(output).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report["sources"][0]["status"] == "metadata-verified" else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]))
