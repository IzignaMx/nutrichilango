import pdfMake from 'pdfmake/build/pdfmake';
import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import type { PantryExport } from './pantry-export';
import helvetica from 'pdfmake/build/standard-fonts/Helvetica';

pdfMake.addFontContainer(helvetica);

export function createPantryPDFDefinition(model: PantryExport): TDocumentDefinitions {
  const sections: Content[] = model.categories.map<Content>(({ name, rows }) => ({
    table: {
      widths: ['*', 'auto', 'auto'],
      headerRows: 1,
      keepWithHeaderRows: 1,
      dontBreakRows: true,
      body: [
        [
          { text: name, colSpan: 3, bold: true, fontSize: 14, fillColor: '#f3f4f6' },
          '',
          '',
        ],
        ...rows.map(row => [
          { text: row.name },
          { text: row.quantity, alignment: 'center' as const, color: '#4b5563' },
          { text: row.price, alignment: 'right' as const, bold: true, color: '#166534' },
        ]),
      ],
    },
    layout: 'lightHorizontalLines',
    margin: [0, 0, 0, 14],
  }));

  return {
    pageSize: 'A4',
    pageMargins: [40, 40, 40, 40],
    info: { title: model.title, author: 'NutriChilango' },
    defaultStyle: { font: 'Helvetica', fontSize: 11, color: '#374151' },
    styles: {
      title: { color: '#166534', bold: true, fontSize: 24 },
      subtitle: { fontSize: 13 },
      metadata: { fontSize: 10, color: '#4b5563' },
      total: { fontSize: 16, bold: true, color: '#166534', alignment: 'center' },
      note: { fontSize: 10, color: '#4b5563', alignment: 'center' },
    },
    content: [
      {
        stack: [
          { text: model.title, style: 'title', margin: [0, 0, 0, 6] },
          ...model.subtitles.map<Content>(text => ({ text, style: 'subtitle', margin: [0, 0, 0, 3] })),
          { text: model.metadata, style: 'metadata', margin: [0, 6, 0, 0] },
        ],
        margin: [0, 0, 0, 20],
      },
      ...sections,
      {
        unbreakable: true,
        stack: [
          { text: model.total, style: 'total', margin: [0, 8, 0, 8] },
          ...model.notes.map<Content>(text => ({ text: `* ${text}`, style: 'note', margin: [0, 0, 0, 3] })),
        ],
      },
    ],
  };
}

export function createPantryPDFBlob(model: PantryExport): Promise<Blob> {
  return pdfMake.createPdf(createPantryPDFDefinition(model)).getBlob();
}
