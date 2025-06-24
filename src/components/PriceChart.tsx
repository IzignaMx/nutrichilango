import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Store } from '@/data';

interface PriceChartProps {
  data: Store[];
}

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const categoryData = React.useMemo(() => {
    const categories: { [key: string]: { traditional: number; plantBased: number; count: number } } = {};
    
    data.forEach(store => {
      store.products.forEach(product => {
        if (!categories[product.category]) {
          categories[product.category] = { traditional: 0, plantBased: 0, count: 0 };
        }
        categories[product.category].traditional += product.traditional.pricePerUnit;
        categories[product.category].plantBased += product.plantBased.pricePerUnit;
        categories[product.category].count += 1;
      });
    });

    const categoryNames = {
      proteins: 'Proteínas',
      dairy: 'Lácteos',
      eggs: 'Huevos',
      snacks: 'Snacks',
      pantry: 'Despensa'
    };

    return Object.entries(categories).map(([category, data]) => ({
      category: categoryNames[category as keyof typeof categoryNames] || category,
      tradicional: Number((data.traditional / data.count).toFixed(2)),
      plantBased: Number((data.plantBased / data.count).toFixed(2)),
      diferencia: Number((((data.plantBased / data.count) - (data.traditional / data.count)) / (data.traditional / data.count) * 100).toFixed(1))
    }));
  }, [data]);

  const storeComparison = React.useMemo(() => {
    return data.map(store => {
      const avgTraditional = store.products.reduce((sum, p) => sum + p.traditional.pricePerUnit, 0) / store.products.length;
      const avgPlantBased = store.products.reduce((sum, p) => sum + p.plantBased.pricePerUnit, 0) / store.products.length;
      
      return {
        tienda: store.name.split(' ')[0], // Shortened name for chart
        tradicional: Number(avgTraditional.toFixed(2)),
        plantBased: Number(avgPlantBased.toFixed(2)),
        diferencia: Number((((avgPlantBased - avgTraditional) / avgTraditional) * 100).toFixed(1))
      };
    }).sort((a, b) => a.diferencia - b.diferencia);
  }, [data]);

  const pieData = React.useMemo(() => {
    const ranges = [
      { name: '0-25%', count: 0, color: '#10B981' },
      { name: '25-50%', count: 0, color: '#F59E0B' },
      { name: '50-75%', count: 0, color: '#EF4444' },
      { name: '75%+', count: 0, color: '#7C3AED' }
    ];

    data.forEach(store => {
      store.products.forEach(product => {
        const diff = product.priceDifferencePercent;
        if (diff <= 25) ranges[0].count++;
        else if (diff <= 50) ranges[1].count++;
        else if (diff <= 75) ranges[2].count++;
        else ranges[3].count++;
      });
    });

    return ranges.filter(range => range.count > 0);
  }, [data]);

  const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#7C3AED'];

  return (
    <div className="space-y-6">
      {/* Category Comparison Bar Chart */}
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Comparación de Precios por Categoría
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="category" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: 'Precio promedio (MXN)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value, name) => [`$${value}`, name === 'tradicional' ? 'Tradicional' : 'Plant-Based']}
                labelStyle={{ color: '#374151' }}
              />
              <Legend />
              <Bar 
                dataKey="tradicional" 
                fill="#10B981" 
                name="Tradicional"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="plantBased" 
                fill="#3B82F6" 
                name="Plant-Based"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Store Comparison */}
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Diferencia de Precios por Tienda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={storeComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="tienda" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: 'Diferencia (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Diferencia']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar 
                dataKey="diferencia" 
                fill="#8B5CF6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Price Difference Distribution */}
      <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Distribución de Diferencias de Precio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/2">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} productos`, 'Cantidad']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h4 className="font-semibold text-gray-700">Rangos de Diferencia de Precio:</h4>
              {pieData.map((range, index) => (
                <div key={range.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded mr-3" 
                      style={{ backgroundColor: range.color }}
                    />
                    <span className="font-medium">{range.name}</span>
                  </div>
                  <span className="text-gray-600">{range.count} productos</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceChart;
