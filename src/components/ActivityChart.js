import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ActivityChart = ({ data }) => (
  <div className="chart activity-chart">
    <div className="chart-header">
    <h3 className="activity-title">Activité quotidienne</h3>
    <div className="legend">
      <div className="legend-item">
        <span className="legend-color" style={{ backgroundColor: '#282D30' }}></span>
        <span className="legend-text">Poids (kg)</span>
      </div>
      <div className="legend-item">
        <span className="legend-color" style={{ backgroundColor: '#E60000' }}></span>
        <span className="legend-text">Calories brûlées (kCal)</span>
       
      </div>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={8} barCategoryGap="20%" margin={{ top: 20, right: 90, left: 20, bottom: 60 }}>
        <XAxis dataKey="day" tickLine={false} />
        <YAxis 
          yAxisId="right" 
          orientation="right" 
          tickLine={false} 
          axisLine={false} 
          domain={['auto', 'auto']} 
          tickCount={8} 
        />
        <YAxis 
          yAxisId="left" 
          orientation="left"
          tick={false} // Enlever les ticks (graduations) pour l'axe des calories
          tickLine={false} 
          axisLine={false} 
          domain={['auto', 'auto']} 
        />
        <Tooltip />
        <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;
