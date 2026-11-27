import importlib.util
import unittest
from datetime import date
from pathlib import Path

spec = importlib.util.spec_from_file_location("audit", Path(__file__).with_name("audit-price-sources.py"))
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)
TODAY = date(2026, 11, 27)
METADATA = """Metadato,Descripción
Autor,Procuraduría Federal del Consumidor (Profeco)
Cobertura temporal,2015-01-01 a 2026-10-31
Última modificación,25/11/2026 00:00
Temporalidad de actualización,Mensual
"""


class AuditTest(unittest.TestCase):
    def test_source_date_not_execution_date_and_latin1(self):
        result = audit.parse_metadata(METADATA.encode("cp1252"), TODAY)
        self.assertEqual(result["coverageEnd"], "2026-10-31")
        self.assertEqual(result["coverageAgeDays"], 27)

    def test_invalid_metadata(self):
        for value in ["<html>error</html>", METADATA.replace("2026-10-31", "2026-12-31"),
                      METADATA + "Autor,Duplicate\n", METADATA.replace("Profeco", "Other")]:
            with self.subTest(value=value), self.assertRaises(ValueError):
                audit.parse_metadata(value.encode(), TODAY)

    def test_dictionary_requires_identity(self):
        prefix = "Variable,Tipo de dato,Nombre corto,Descripción\n"
        rows = "".join(f"{field},texto,corto,desc\n" for field in sorted(audit.REQUIRED))
        self.assertEqual(set(audit.parse_dictionary((prefix + rows).encode())), audit.REQUIRED)
        with self.assertRaises(ValueError):
            audit.parse_dictionary((prefix + rows.replace("direccion,texto,corto,desc\n", "")).encode())


if __name__ == "__main__":
    unittest.main()
