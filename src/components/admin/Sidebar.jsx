import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/users">User Management</Link></li>
        <li><Link to="/admin/products">Product Management</Link></li>
        <li><Link to="/admin/orders">Order Management</Link></li>
        <li><Link to="/admin/reports">Financial Reports</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
