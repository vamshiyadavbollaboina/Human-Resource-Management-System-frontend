import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css'; // optional, for styles

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem('token'); // clear auth token
    navigate('/login'); // redirect to login page
  };

  return (
    <header className="app-header">
      <h1 className="app-title">HRMS Dashboard</h1>
      
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/employees"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Employees
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Teams
        </NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
