import React from 'react';
import Header from '../components/admin/Header';
import Sidebar from '../components/admin/Sidebar';
import DashboardMetrics from '../components/admin/DashboardMetrics';
import UserManagement from '../components/admin/UserManagement';
import ProductManagement from '../components/admin/ProductManagement';
import OrderManagement from '../components/admin/OrderManagement';
import FinancialReports from '../components/admin/FinancialReports';
import '../css/adminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <div className="admin-dashboard-content">
        {/* Barra lateral */}
        <Sidebar />

        {/* Área principal */}
        <main className="main-content">
          {/* Sección de métricas */}
          <section className="section metrics">
            <DashboardMetrics />
          </section>

          {/* Sección de gestión de usuarios */}
          <section className="section user-management">
            <UserManagement />
          </section>

          {/* Sección de gestión de productos */}
          <section className="section product-management">
            <ProductManagement />
          </section>

          {/* Sección de gestión de pedidos */}
          <section className="section order-management">
            <OrderManagement />
          </section>

          {/* Sección de reportes financieros */}
          <section className="section financial-reports">
            <FinancialReports />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
