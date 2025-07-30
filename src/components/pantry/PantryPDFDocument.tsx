import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Configurar fuentes para mejor renderizado
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Inter'
  },
  header: {
    marginBottom: 30,
    borderBottom: '2px solid #16a34a',
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4
  },
  metadata: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 10
  },
  section: {
    marginBottom: 25
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 4
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottom: '1px solid #e5e7eb'
  },
  itemName: {
    fontSize: 12,
    color: '#374151',
    flex: 2
  },
  itemQuantity: {
    fontSize: 11,
    color: '#6b7280',
    flex: 1,
    textAlign: 'center'
  },
  itemPrice: {
    fontSize: 12,
    color: '#16a34a',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right'
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTop: '2px solid #16a34a',
    alignItems: 'center'
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 8
  },
  footerNote: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 1.4
  }
});

type PantryItem = {
  id: string;
  name: string;
  category: string;
  quantity: string;
  price: number;
  unit: string;
};

type PantryPDFDocumentProps = {
  items: PantryItem[];
  householdSize: number;
  frequency: string;
  preferences: string[];
  totalPrice: number;
};

const PantryPDFDocument: React.FC<PantryPDFDocumentProps> = ({
  items,
  householdSize,
  frequency,
  preferences,
  totalPrice
}) => {
  const frequencyLabels = {
    weekly: 'Semanal',
    biweekly: 'Quincenal', 
    monthly: 'Mensual'
  };

  const categories = [...new Set(items.map(item => item.category))];
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Despensa Vegana</Text>
          <Text style={styles.subtitle}>
            Personalizada para {householdSize} persona{householdSize > 1 ? 's' : ''}
          </Text>
          <Text style={styles.subtitle}>
            Frecuencia: {frequencyLabels[frequency as keyof typeof frequencyLabels]}
          </Text>
          {preferences.length > 0 && (
            <Text style={styles.subtitle}>
              Preferencias: {preferences.join(', ')}
            </Text>
          )}
          <Text style={styles.metadata}>
            Generada el {currentDate} • NutriChilango.com
          </Text>
        </View>

        {categories.map(category => (
          <View key={category} style={styles.section}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {items
              .filter(item => item.category === category)
              .map(item => (
                <View key={item.id} style={styles.itemRow}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>
                    {item.quantity} {item.unit}
                  </Text>
                  <Text style={styles.itemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
              ))}
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.totalText}>
            Total estimado: ${totalPrice.toFixed(2)} MXN
          </Text>
          <Text style={styles.footerNote}>
            * Los precios son estimados basados en datos de mercados locales de la CDMX.{'\n'}
            * Esta lista fue generada con NutriChilango para promover una alimentación vegana accesible.{'\n'}
            * Visita nutrichilango.izignamx.com para comparar precios actualizados.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PantryPDFDocument;