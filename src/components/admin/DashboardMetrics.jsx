import React from 'react';

const DashboardMetrics = () => {
  return (
    <div className="dashboard-metrics">
      <h2>Dashboard Metrics</h2>
      <div className="metrics-grid">
        <div className="metric">
          <h3>Total Users</h3>
          <p>1234</p>
        </div>
        <div className="metric">
          <h3>Active Sewcosers</h3>
          <p>567</p>
        </div>
        <div className="metric">
          <h3>Monthly Sales</h3>
          <p>$10,000</p>
        </div>
        <div className="metric">
          <h3>Pending Orders</h3>
          <p>42</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
