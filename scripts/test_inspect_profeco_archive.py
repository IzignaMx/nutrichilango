import importlib.util
import io
import tarfile
import tempfile
import unittest
from datetime import date
from pathlib import Path

spec = importlib.util.spec_from_file_location("inspect_archive", Path(__file__).with_name("inspect-profeco-archive.py"))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
HEADER = ",".join(module.REQUIRED)
ROW = "LECHE,1 L,MARCA,25.50,2026-10-30,TIENDA,CALLE,CIUDAD DE MÉXICO,COYOACÁN"


class ArchiveTest(unittest.TestCase):
    def test_fixture_uses_raw_evidence_and_no_publication(self):
        raw = (HEADER + "\n" + ROW + "\n").encode()
        with tempfile.TemporaryDirectory() as root:
            archive = Path(root) / "sample.tar"
            with tarfile.open(archive, "w") as writer:
                member = tarfile.TarInfo("observations.csv")
                member.size = len(raw)
                writer.addfile(member, io.BytesIO(raw))
            name, length, contents = module.read_first_csv(archive)
            self.assertEqual((name, length, contents), ("observations.csv", len(raw), raw))
        result = module.sample_rows(contents, date(2026, 10, 31))
        self.assertEqual(result["validSyntaxRows"], 1)
        self.assertEqual(result["sample"][0]["rawFields"]["presentacion"], "1 L")
        self.assertFalse(result["sample"][0]["publicationEligible"])

    def test_rejects_corrupt_prices_missing_presentation_future_dates_and_wrong_location(self):
        cases = [ROW.replace("25.50", "NaN"), ROW.replace("1 L", ""), ROW.replace("2026-10-30", "2026-11-01"),
                 ROW.replace("CIUDAD DE MÉXICO", "ESTADO DE MÉXICO")]
        result = module.sample_rows((HEADER + "\n" + "\n".join(cases)).encode("cp1252"), date(2026, 10, 31))
        self.assertEqual(result["validSyntaxRows"], 0)
        self.assertEqual(result["rejectedRows"], 3)
        self.assertEqual(result["cdmxRows"], 3)
        with self.assertRaises(ValueError):
            module.sample_rows(b"producto,precio\na,3", date(2026, 10, 31))

    def test_bounds_and_official_origin(self):
        with self.assertRaises(ValueError):
            module.download_archive("https://example.com/2026.rar", "/tmp/unused", 100)
        with self.assertRaises(ValueError):
            module.download_archive(module.BASE + "2026.rar", "/tmp/unused", module.MAX_ARCHIVE + 1)
        rows = ("\n".join([HEADER] + [ROW] * (module.MAX_ROWS + 1))).encode()
        result = module.sample_rows(rows, date(2026, 10, 31))
        self.assertEqual(result["rowsExamined"], module.MAX_ROWS)
        self.assertEqual(len(result["sample"]), module.MAX_EVIDENCE)


if __name__ == "__main__":
    unittest.main()
