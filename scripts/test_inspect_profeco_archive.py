import importlib.util
import io
import tarfile
import tempfile
import unittest
from unittest.mock import MagicMock, patch
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

    def test_recent_period_skips_older_members_and_scans_beyond_first_2000(self):
        coverage = date(2026, 10, 31)
        old = (HEADER + "\n" + ROW.replace("2026-10-30", "2026-01-01") + "\n").encode()
        other = ROW.replace("CIUDAD DE MÉXICO", "ESTADO DE MÉXICO")
        latest = ("\n".join([HEADER] + [other] * 2100 + [ROW]) + "\n").encode()
        with tempfile.TemporaryDirectory() as root:
            archive = Path(root) / "sample.tar"
            with tarfile.open(archive, "w") as writer:
                for name, raw in [("2026/01-2026_Q1.csv", old), ("2026/10-2026_Q2.csv", latest)]:
                    member = tarfile.TarInfo(name)
                    member.size = len(raw)
                    writer.addfile(member, io.BytesIO(raw))
            output = Path(root) / "observations.csv"
            member, size, digest = module.read_recent_csv(archive, coverage, output)
            self.assertEqual(member, "2026/10-2026_Q2.csv")
            self.assertEqual(size, len(latest))
            result = module.sample_recent_file(output, coverage)
            self.assertEqual(result["rowsExamined"], 2101)
            self.assertEqual(result["validSyntaxRows"], 1)
            self.assertEqual(result["sample"][0]["recordNumber"], 2102)
            with self.assertRaises(ValueError):
                module.read_recent_csv(archive, date(2026, 11, 15), output)

    def test_changed_etag_fails_before_writing(self):
        response = MagicMock(status=200, headers={"ETag": '"new"'})
        response.geturl.return_value = module.BASE + "2026.rar"
        opener = MagicMock()
        opener.open.return_value.__enter__.return_value = response
        with tempfile.TemporaryDirectory() as root, patch.object(module, "build_opener", return_value=opener):
            output = Path(root) / "archive.rar"
            with self.assertRaisesRegex(ValueError, "ETag changed"):
                module.download_archive(module.BASE + "2026.rar", output, 100, '"old"')
            self.assertFalse(output.exists())

    def test_recent_period_rejects_older_rows_and_row_limit(self):
        old = ROW.replace("2026-10-30", "2026-10-15")
        with tempfile.TemporaryDirectory() as root:
            output = Path(root) / "period.csv"
            output.write_text(HEADER + "\n" + old + "\n" + ROW + "\n", encoding="utf-8")
            result = module.sample_recent_file(output, date(2026, 10, 31))
            self.assertEqual(result["validSyntaxRows"], 1)
            self.assertEqual(result["rejectedRows"], 1)
            with patch.object(module, "MAX_PERIOD_ROWS", 1):
                with self.assertRaisesRegex(ValueError, "row bound"):
                    module.sample_recent_file(output, date(2026, 10, 31))

    def test_diagnostics_separate_rejections_and_safe_format_classes(self):
        rows = [
            ROW,
            ROW.replace("2026-10-30", "30/10/2026"),
            ROW.replace("25.50", "NaN"),
            ROW.replace("2026-10-30", "2026-11-01"),
            ROW.replace("MARCA", ""),
            ROW.replace("1 L", ""),
            ROW + ",extra",
        ]
        result = module.sample_rows(("\n".join([HEADER] + rows)).encode(), date(2026, 10, 31))
        self.assertEqual(result["validSyntaxRows"], 1)
        self.assertEqual(result["rejectedRows"], 6)
        self.assertEqual(result["rejectionReasons"], {
            "row-shape": 1, "missing-required-fields": 2,
            "invalid-price": 1, "invalid-date": 1, "date-outside-coverage": 1,
        })
        self.assertEqual(result["missingFieldCounts"], {"marca": 1, "presentacion": 1})
        self.assertEqual(result["dateFormats"]["day-month-year-slash"], 1)
        self.assertEqual(result["priceFormats"]["other"], 1)
        self.assertNotIn("30/10/2026", str(result["dateFormats"]))

    def test_profeco_observed_year_month_day_slash_only(self):
        valid = ROW.replace("2026-10-30", "2026/10/30")
        invalid = [ROW.replace("2026-10-30", value) for value in
                   ("30/10/2026", "2026/10/32", "2026/13/01", "2026/11/01")]
        result = module.sample_rows(("\n".join([HEADER, valid, *invalid])).encode(), date(2026, 10, 31))
        self.assertEqual(result["validSyntaxRows"], 1)
        self.assertEqual(result["sample"][0]["observedDate"], "2026-10-30")
        self.assertEqual(result["sample"][0]["rawFields"]["fecha_registro"], "2026/10/30")
        self.assertEqual(result["rejectionReasons"], {"invalid-date": 3, "date-outside-coverage": 1})
        self.assertFalse(result["sample"][0]["publicationEligible"])
        self.assertFalse(result["sample"][0]["currencyVerified"])

    def test_identity_discovery_is_exact_and_not_price_publication(self):
        rows = [ROW, ROW, ROW.replace("MARCA", "OTRA MARCA"),
                ROW.replace("LECHE", "LECHE CON CHOCOLATE"),
                ROW.replace("LECHE", "FRIJOL").replace("1 L", "1 KG"),
                ROW.replace("LECHE", "TOFU").replace("CIUDAD DE MÉXICO", "ESTADO DE MÉXICO")]
        result = module.sample_rows(("\n".join([HEADER, *rows])).encode(), date(2026, 10, 31))
        inventory = result["candidateInventory"]
        self.assertEqual(inventory["perLabel"]["LECHE"]["rows"], 3)
        self.assertEqual(inventory["perLabel"]["LECHE"]["distinctIdentities"], 2)
        self.assertEqual(inventory["perLabel"]["LECHE"]["examples"][0],
                         {"product": "LECHE", "brand": "MARCA", "presentation": "1 L", "rows": 2})
        self.assertEqual(inventory["perLabel"]["FRIJOL"]["rows"], 1)
        self.assertEqual(inventory["perLabel"]["TOFU"]["rows"], 0)
        self.assertFalse(inventory["publicationEligible"])
        self.assertNotIn("precio", str(inventory))
        with patch.object(module, "MAX_IDENTITIES", 1):
            with self.assertRaisesRegex(ValueError, "identity bound"):
                module.sample_rows(("\n".join([HEADER, *rows])).encode(), date(2026, 10, 31))

    def test_exact_candidate_deduplicates_and_quarantines_conflicting_store_day(self):
        header = HEADER + ",cadena_comercial"
        raw = ROW.replace("LECHE,1 L,MARCA", "Vinagre,Botella 1 Lt. Blanco Alcohol Cana,Clemente Jacques")
        first = raw + ",CADENA"
        duplicate = first.replace("25.50", "25.5")
        conflict = first.replace("25.50", "26.50")
        other = first.replace("CALLE", "OTRA CALLE")
        missing = first.replace(",CADENA", ",")
        near = first.replace("Botella 1 Lt.", "Botella 500 Ml.")
        result = module.sample_rows(("\n".join([header, first, duplicate, conflict, other, missing, near])).encode(),
                                    date(2026, 10, 31))
        audit = result["mappedCandidateAudit"]["cj-vinegar-1l"]
        self.assertEqual(audit["rawMatches"], 5)
        self.assertEqual(audit["storeDateGroups"], 2)
        self.assertEqual(audit["duplicateRows"], 1)
        self.assertEqual(audit["conflictedGroups"], 1)
        self.assertEqual(audit["unconflictedGroups"], 1)
        self.assertEqual(audit["missingStoreIdentity"], 1)
        self.assertFalse(audit["publicationEligible"])
        self.assertFalse(audit["currencyVerified"])
        evidence = result["mappedCandidateEvidence"]["cj-vinegar-1l"]
        self.assertEqual(len(evidence), 1)
        self.assertEqual(evidence[0]["rawFields"]["direccion"], "OTRA CALLE")

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
