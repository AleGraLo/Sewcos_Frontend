import React from 'react';

const OrderManagement = () => {
  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Jane Smith</td>
            <td>Custom Dress</td>
            <td>Pending</td>
            <td>
              <button onClick={() => alert('Order processed!')}>Mark as Processed</button>
              <button onClick={() => alert('Order shipped!')}>Mark as Shipped</button>
            </td>
          </tr>
          <tr>
            <td>12346</td>
            <td>John Doe</td>
            <td>Tailored Suit</td>
            <td>Processed</td>
            <td>
              <button onClick={() => alert('Order shipped!')}>Mark as Shipped</button>
              <button onClick={() => alert('Order completed!')}>Mark as Completed</button>
            </td>
          </tr>
          {/* Más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
