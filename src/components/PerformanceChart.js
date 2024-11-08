import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Conversion des données pour Recharts
const transformUserPerformanceData = (userPerformance) => {
  if (!userPerformance || !userPerformance.kind || !userPerformance.data) {
    console.error("Données de performance manquantes ou incorrectes.");
    return [];
  }

  const { kind, data } = userPerformance;

  return data.map(item => ({
    kind: kind[item.kind],
    value: item.value
  }));
};

const PerformanceChart = ({ data }) => {
  const transformedData = transformUserPerformanceData(data);

  return (
    <div className="chart performance-chart">
      <ResponsiveContainer width="100%" height={300}>
        {transformedData.length > 0 ? (
          <RadarChart outerRadius={90} data={transformedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        ) : (
          <p>Pas de données disponibles</p>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
