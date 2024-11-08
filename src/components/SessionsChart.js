import React from 'react';
import { LineChart, Line, XAxis, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

// Fonction pour formater les jours de la semaine
const formatLabel = (value) => {
  switch (value) {
    case 1: return 'L'; // Lundi
    case 2: return 'M'; // Mardi
    case 3: return 'M'; // Mercredi
    case 4: return 'J'; // Jeudi
    case 5: return 'V'; // Vendredi
    case 6: return 'S'; // Samedi
    case 7: return 'D'; // Dimanche
    default: return value;
  }
};

const SessionsChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Pas de données disponibles pour les sessions.</div>;
  }

  return (
    <div className="chart sessions-chart"> {/* Classe unique */}
      <h3 className="chartaverage-sessions-title">
        Durée moyenne des <br /> sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      {/* Définitions des gradients */}
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
        </linearGradient>
      </defs>
      {/* Courbe */}
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="url(#colorUv)"
        strokeWidth={2}
        dot={false}
      />
      {/* Axe X */}
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{
          fill: 'rgba(255,255,255,0.6)',
          fontSize: '0.75rem',
        }}
        tickFormatter={formatLabel}
      />
      <Tooltip cursor={false} />
      <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
    </LineChart>
  </ResponsiveContainer>
    </div>
  );
};

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SessionsChart;
