import React from 'react';
import styles from './ChartTooltip.module.css';

const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { F0, F1, F2 } = payload[0].payload.details;
    return (
      <div className={styles.chartTooltip}>
        <p>{label}</p>
        <p>F0 (Rebate): {F0}</p>
        <p>F1 (Commission): {F1}</p>
        <p>F2 (Commission): {F2}</p>
      </div>
    );
  }
  return null;
};

export default ChartTooltip;
