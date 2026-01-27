import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/PabloArchive" className="nav-link">Pablo Archive</Link>
      </nav>
    </header>
  );
};

export default Header;
