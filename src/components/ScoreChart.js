import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ScoreChart = ({ score }) => {
  const data = [
    { name: 'score', value: score },
    { name: 'remainder', value: 1 - score },
  ];

  return (
    <div className="score-chart">
      {/* Ajout du titre Score ici */}
      <div className="score-title">Score</div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            innerRadius={80} 
            outerRadius={100} 
            startAngle={90} 
            endAngle={450}
          >
            <Cell key="score" fill="#E60000" />
            <Cell key="remainder" fill="#fbfbfb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="score-label">
        <p>{`${score * 100}%`}</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default ScoreChart;
