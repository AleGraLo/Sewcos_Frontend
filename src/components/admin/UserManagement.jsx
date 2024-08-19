import React from 'react';

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
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

export default UserManagement;
