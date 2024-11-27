import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header.css";  // Esto debería ser correcto si Header.jsx está en src/components/


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          Empresa Bravo {">_<"}
        </h1>
        <Link to="/" className="btn-home">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
