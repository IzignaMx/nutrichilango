"""Immutable, read-only QQP audit summary cache; never cache price or store records."""
import hashlib
import json
import os
import re
import sys
from datetime import date, datetime, timezone
from pathlib import Path

SOURCE_FIELDS = ("archiveUrl", "archiveETag", "archiveBytesReported", "coverageStart", "coverageEnd",
                 "metadataSha256", "dictionarySha256")
SUMMARY_FIELDS = ("status", "catalogChanged", "publicationEligible", "checkedAt", "sourceUrl", "archiveSha256",
                  "archiveBytes", "member", "memberSha256", "periodEnd", "periodStart", "rowsExamined",
                  "cdmxRows", "validSyntaxRows", "rejectedRows")
HASH = re.compile(r"[a-f0-9]{64}")
MAX_JSON = 262_144


def fingerprint(source, reader_digest):
    tag = source.get("archiveETag")
    if source.get("status") != "metadata-verified" or not isinstance(tag, str) or not re.fullmatch(r'"[^"\s]{1,256}"', tag):
        return None
    if not isinstance(reader_digest, str) or not HASH.fullmatch(reader_digest):
        return None
    try:
        key = {name: source[name] for name in SOURCE_FIELDS}
        if not re.fullmatch(r"https://datos\.profeco\.gob\.mx/docs/qqp/20\d{2}\.rar", key["archiveUrl"]):
            return None
        if type(key["archiveBytesReported"]) is not int or not 0 < key["archiveBytesReported"] <= 200_000_000:
            return None
        if not all(isinstance(key[name], str) and HASH.fullmatch(key[name]) for name in ("metadataSha256", "dictionarySha256")):
            return None
        if date.fromisoformat(key["coverageStart"]) > date.fromisoformat(key["coverageEnd"]):
            return None
    except (KeyError, TypeError, ValueError):
        return None
    encoded = json.dumps({"schema": 1, "source": key, "reader": reader_digest}, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(encoded.encode()).hexdigest()


def valid_summary(source, summary):
    if not isinstance(summary, dict) or set(summary) != set(SUMMARY_FIELDS):
        return False
    if summary["status"] != "sample-inspected" or summary["catalogChanged"] is not False or summary["publicationEligible"] is not False:
        return False
    if summary["sourceUrl"] != source["archiveUrl"] or summary["archiveBytes"] != source["archiveBytesReported"]:
        return False
    if summary["periodEnd"] != source["coverageEnd"]:
        return False
    if not all(isinstance(summary[name], str) and HASH.fullmatch(summary[name]) for name in ("archiveSha256", "memberSha256")):
        return False
    try:
        period = date.fromisoformat(summary["periodEnd"])
        half = 1 if period.day <= 15 else 2
        expected = f"{period.year}/{period.month:02d}-{period.year}_Q{half}.csv"
        if summary["member"] != expected or summary["periodStart"] != period.replace(day=1 if half == 1 else 16).isoformat():
            return False
        if datetime.fromisoformat(summary["checkedAt"]).tzinfo is None:
            return False
    except (TypeError, ValueError):
        return False
    counts = [summary[name] for name in ("rowsExamined", "cdmxRows", "validSyntaxRows", "rejectedRows")]
    if not all(type(value) is int for value in counts):
        return False
    total, local, valid, rejected = counts
    return 0 < local == valid <= total <= 1_500_000 and rejected == 0


def make_record(source, key, report):
    if not key or not isinstance(report, dict) or not set(SUMMARY_FIELDS) <= set(report):
        return None
    summary = {name: report[name] for name in SUMMARY_FIELDS}
    if not valid_summary(source, summary):
        return None
    return {"schema": 1, "key": key, "summary": summary}


def restore_record(source, key, record):
    if not key or not isinstance(record, dict) or set(record) != {"schema", "key", "summary"}:
        return None
    if record["schema"] != 1 or record["key"] != key or not valid_summary(source, record["summary"]):
        return None
    return {**record["summary"], "cacheReused": True, "cacheRestoredAt": datetime.now(timezone.utc).isoformat(),
            "artifactEvidenceIncluded": False, "sourceFingerprint": key}


def read_json(path):
    with open(path, "rb") as stream:
        data = stream.read(MAX_JSON + 1)
    if len(data) > MAX_JSON:
        raise ValueError("Oversized cache or report")
    return json.loads(data)


def reader_hash():
    root = Path(__file__).parent
    files = ("audit-price-sources.py", "inspect-profeco-archive.py", "profeco-cache.py")
    hashes = [hashlib.sha256((root / name).read_bytes()).hexdigest() for name in files]
    return hashlib.sha256("".join(hashes).encode()).hexdigest()


def output(name, value):
    with open(os.environ["GITHUB_OUTPUT"], "a", encoding="utf-8") as stream:
        stream.write(f"{name}={value}\n")


def write_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main(mode, metadata_path, cache_path=None, report_path=None):
    source = read_json(metadata_path)["sources"][0]
    key = fingerprint(source, reader_hash())
    if mode == "key":
        output("eligible", "true" if key else "false")
        output("key", key or "")
    elif mode == "restore":
        try:
            record = restore_record(source, key, read_json(cache_path))
        except (OSError, ValueError, TypeError, KeyError):
            record = None
        if record is not None:
            write_json(report_path, record)
            print("Profeco audit summary reused; no archive download and no observations published.")
        else:
            print("Cache absent or invalid; proceed with live audit.")
        output("reused", "true" if record else "false")
    elif mode == "save":
        record = make_record(source, key, read_json(report_path))
        if record:
            write_json(cache_path, record)
            print("Validated aggregate-only audit summary eligible for cache.")
        output("ready", "true" if record else "false")
    else:
        raise ValueError("Unknown cache operation")


if __name__ == "__main__":
    main(*sys.argv[1:])
