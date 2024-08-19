import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', income: 4000, expenses: 2400 },
  { name: 'February', income: 3000, expenses: 1398 },
  { name: 'March', income: 5000, expenses: 4300 },
  { name: 'April', income: 4780, expenses: 2900 },
  { name: 'May', income: 5890, expenses: 3800 },
  { name: 'June', income: 4390, expenses: 2000 },
  { name: 'July', income: 5490, expenses: 2780 },
];

const FinancialReports = () => {
  return (
    <div className="financial-reports">
      <h2>Financial Reports</h2>
      <div className="report-section">
        <h3>Monthly Financial Overview</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="report-section">
        <h3>Yearly Summary</h3>
        <p>Total Income: $35,000</p>
        <p>Total Expenses: $20,000</p>
        <p>Net Profit: $15,000</p>
      </div>
    </div>
  );
};

export default FinancialReports;
