import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">Inicio</Link>
      <Link to="/login" className="navbar__link">Iniciar Sesión</Link>
    </nav>
  );
}

export default Navbar;
