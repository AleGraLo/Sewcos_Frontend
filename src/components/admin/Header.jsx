import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Sewcos Admin</div>
      <nav className="nav">
        <ul>
          <li><a href="/admin/profile">Profile</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

