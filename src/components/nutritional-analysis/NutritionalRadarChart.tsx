
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

interface NutritionalRadarChartProps {
  radarData: Array<{
    nutrient: string;
    tradicional: number;
    plantBased: number;
  }>;
}

const NutritionalRadarChart: React.FC<NutritionalRadarChartProps> = ({ radarData }) => {
  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800 flex items-center">
          🎯 Perfil Nutricional (% del valor de referencia)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis tick={{ fontSize: 12 }} />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fontSize: 10 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Radar
              name="Tradicional"
              dataKey="tradicional"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Plant-Based"
              dataKey="plantBased"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend />
            <Tooltip 
              formatter={(value) => [`${Math.round(value as number)}%`, '']}
              labelStyle={{ color: '#374151' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default NutritionalRadarChart;
