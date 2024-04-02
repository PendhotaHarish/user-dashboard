import React from "react";
import styles from "./PieCharts.module.css";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 400 },
];
const COLORS = ["#0088FE", "#AAA", "#FFBB28", "#FFBB28"];
export default function PieCharts() {
  return (
    <div className={styles.pieMainContainer}>
      <div className={styles.pieHeading}>
        <h4 className={styles.pieTitle}>Customers</h4>
        <h4 className={styles.pieMessage}>Customers that buy products</h4>
      </div>
      <PieChart width={350} height={200} className={styles.pie}>
        <text
          x={175}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.chartTitle}
        >
          65% total new Customers
        </text>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
