
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface NutritionalBarChartProps {
  nutritionData: Array<{
    nutrient: string;
    tradicional: number;
    plantBased: number;
  }>;
}

const NutritionalBarChart: React.FC<NutritionalBarChartProps> = ({ nutritionData }) => {
  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800 flex items-center">
          📊 Comparación Nutricional por 100g
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={nutritionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="nutrient" 
              tick={{ fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [
                `${value}${name === 'Calorías' ? ' kcal' : ''}`,
                name === 'tradicional' ? 'Producto Tradicional' : 'Alternativa Plant-Based'
              ]}
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
  );
};

export default NutritionalBarChart;
