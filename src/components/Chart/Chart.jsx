import React, { useState } from "react";
import styles from "./Chart.module.css";
import { FaArrowRight } from "react-icons/fa";

import {
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import chartData from "../../data/ChartTest";
import ChartTooltip from "../ChartTooltip/ChartTooltip";

const Chart = () => {
  const [activeTier, setActiveTier] = useState(null);

  const handleMouseMove = (state) => {
    if (state.activeTooltipIndex !== undefined) {
      setActiveTier(state.activeTooltipIndex);
    } else {
      setActiveTier(null);
    }
  };

  const handleTierHover = (index) => {
    setActiveTier(index);
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartContent}>
        <div className={styles.chartCard}>
          <h1>Unlock Rewards with the Copin Rerral Program</h1>
          <p>
            Earn rebates and commissions by inviting friends. Grow your network
            and benefit from our 6-tier reward system.
          </p>
          <a href="">
            View referral Ranking <FaArrowRight />
          </a>
        </div>
      </div>
      <div className={styles.chartContent}>
        <ResponsiveContainer
          className={styles.chartWrapper}
          width="100%"
          height={300}
        >
          <AreaChart
            data={chartData}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveTier(null)}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4293D9" stopOpacity={0.1} />
                <stop offset="50%" stopColor="#4293D9" stopOpacity={1} />
                <stop offset="100%" stopColor="#4293D9" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="#29394C"
              strokeDasharray="7 6"
              opacity={0.7}
            />
            <XAxis dataKey="tier" axisLine={false} tick={false} />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#lineGradient)"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className={styles.tierWrapper}>
          {chartData.map((tier, index) => (
            <div
              key={index}
              className={`${styles.tierItem} ${
                activeTier === index ? styles.active : ""
              }`}
              onMouseEnter={() => handleTierHover(index)}
              onMouseLeave={() => setActiveTier(null)}
            >
              <div className={styles.iconContainer}>
                <span
                  className={styles.tierIcon}
                  style={{ backgroundColor: tier.color }}
                >
                  {React.cloneElement(tier.icon, {
                    color: "white",
                    size: 24,
                  })}
                </span>
              </div>
              <p>{tier.tier}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
