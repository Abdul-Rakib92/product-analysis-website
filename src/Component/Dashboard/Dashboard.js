import React, { useEffect, useState } from "react";
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMonths(data));
  }, []);

  return (
    <div className="dashboard">
        <h1>Investment VS Revenue</h1>
      <LineChart width={800} height={500} data={months}>
        <Line dataKey={"sell"}></Line>
        <Line dataKey={"revenue"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <Tooltip />
        <YAxis dataKey={"investment"}></YAxis>
      </LineChart>

      <br />
      <br />
        <h1>Investment VS Revenue</h1>
      <BarChart width={800} height={400} data={months}>
            <Bar dataKey={"sell"} fill="#8884d8" />
            <Bar dataKey={"revenue"} fill="#1739d4" />
            <XAxis dataKey={"month"}></XAxis>
            <Tooltip />
            <YAxis dataKey={"investment"}></YAxis>
        </BarChart>
    </div>
  );
};

export default Dashboard;
