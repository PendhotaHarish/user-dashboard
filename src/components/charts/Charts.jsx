import React from "react";
import styles from "./Charts.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import PieCharts from "./PieCharts";
export default function Charts() {
  const data = [
    {
      name: "Jan",
      pv: 20,
    },
    {
      name: "Feb",
      pv: 10,
    },
    {
      name: "Mar",
      pv: 30,
    },
    {
      name: "Apr",
      pv: 25,
    },
    {
      name: "May",
      pv: 28,
    },
    {
      name: "Jun",
      pv: 15,
    },
    {
      name: "July",
      pv: 28,
    },
    {
      name: "Aug",
      pv: 35,
    },
    {
      name: "Sep",
      pv: 32,
    },
    {
      name: "Oct",
      pv: 30,
    },
    {
      name: "Nov",
      pv: 28,
    },
    {
      name: "Dec",
      pv: 30,
    },
  ];
  const isSmallScreen = window.innerWidth <= 480;

  return (
    <div className={styles.chartMainContainer}>
      <div className={styles.chartSubContainer}>
        <div className={styles.chartContainer}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>Overview</h2>
            <h2 className={styles.chartSubtitle}>Monthly Earning</h2>
          </div>
          <div className={styles.chartYearly}>
            <select className={styles.chartSelect}>
              <option value="quarterly">Quarterly</option>
              <option value="half-yearly">Half-yearly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>
        <BarChart
          width={isSmallScreen ? 300 : 400}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          className={styles.bar}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "white" }} />
        </BarChart>
      </div>
      <PieCharts />
    </div>
  );
}
