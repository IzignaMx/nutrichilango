import importlib.util
import unittest
from copy import deepcopy
from pathlib import Path

spec = importlib.util.spec_from_file_location("profeco_cache", Path(__file__).with_name("profeco-cache.py"))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

SOURCE = {"status": "metadata-verified", "archiveUrl": "https://datos.profeco.gob.mx/docs/qqp/2026.rar",
          "archiveETag": '"abc123"', "archiveBytesReported": 100, "coverageStart": "2015-01-01",
          "coverageEnd": "2026-10-31", "metadataSha256": "a" * 64, "dictionarySha256": "b" * 64}
REPORT = {"status": "sample-inspected", "catalogChanged": False, "publicationEligible": False,
          "checkedAt": "2026-11-28T08:00:00+00:00", "sourceUrl": SOURCE["archiveUrl"],
          "archiveSha256": "c" * 64, "archiveBytes": 100, "member": "2026/10-2026_Q2.csv",
          "memberSha256": "d" * 64, "periodEnd": SOURCE["coverageEnd"], "periodStart": "2026-10-16",
          "rowsExamined": 550742, "cdmxRows": 115562, "validSyntaxRows": 115562, "rejectedRows": 0,
          "sample": [{"rawFields": {"direccion": "DO NOT CACHE"}}],
          "mappedCandidateEvidence": {"one": [{"rawFields": {"precio": "DO NOT CACHE"}}]}}


class CacheTest(unittest.TestCase):
    def test_key_changes_on_source_or_reader_change(self):
        key = module.fingerprint(SOURCE, "e" * 64)
        self.assertRegex(key, r"^[a-f0-9]{64}$")
        for field, value in [("archiveETag", '"changed"'), ("coverageEnd", "2026-10-30"),
                             ("dictionarySha256", "f" * 64), ("archiveBytesReported", 101)]:
            changed = {**SOURCE, field: value}
            self.assertNotEqual(module.fingerprint(changed, "e" * 64), key)
        self.assertNotEqual(module.fingerprint(SOURCE, "f" * 64), key)
        for bad in (None, 'W/"abc123"', "unquoted", '""'):
            self.assertIsNone(module.fingerprint({**SOURCE, "archiveETag": bad}, "e" * 64))

    def test_safe_summary_and_exact_key(self):
        key = module.fingerprint(SOURCE, "e" * 64)
        record = module.make_record(SOURCE, key, REPORT)
        self.assertNotIn("DO NOT CACHE", str(record))
        self.assertNotIn("sample", record["summary"])
        self.assertNotIn("mappedCandidateEvidence", record["summary"])
        restored = module.restore_record(SOURCE, key, record)
        self.assertTrue(restored["cacheReused"])
        self.assertFalse(restored["publicationEligible"])
        self.assertEqual(restored["checkedAt"], REPORT["checkedAt"])
        self.assertIsNone(module.restore_record(SOURCE, "f" * 64, record))
        wrong = deepcopy(record)
        wrong["summary"]["publicationEligible"] = True
        self.assertIsNone(module.restore_record(SOURCE, key, wrong))
        wrong = deepcopy(record)
        wrong["summary"]["sample"] = REPORT["sample"]
        self.assertIsNone(module.restore_record(SOURCE, key, wrong))

    def test_requires_successful_complete_audit(self):
        key = module.fingerprint(SOURCE, "e" * 64)
        for changes in ({"status": "unavailable"}, {"rejectedRows": 1}, {"validSyntaxRows": 0},
                        {"archiveBytes": 101}, {"catalogChanged": True}, {"memberSha256": "wrong"}):
            self.assertIsNone(module.make_record(SOURCE, key, {**REPORT, **changes}))


if __name__ == "__main__":
    unittest.main()
