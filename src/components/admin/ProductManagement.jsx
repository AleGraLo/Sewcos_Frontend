import React from 'react';

const ProductManagement = () => {
  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Custom Shirt</td>
            <td>$45</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* Añadir más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
