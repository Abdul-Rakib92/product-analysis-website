import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
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
    </div>
  );
};

export default Dashboard;
