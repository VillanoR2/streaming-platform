import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">Inicio</Link>
      <Link to="/rent" className="navbar__link">Alquilar</Link>
      <Link to="/buy" className="navbar__link">Comprar</Link>
    </nav>
  );
}

export default Navbar;
