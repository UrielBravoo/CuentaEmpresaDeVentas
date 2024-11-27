import React from 'react';
import '../Styles/Footer.css';  // Asegúrate de que la ruta sea correcta
import logo from '/images/unahur.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Alumno Uriel Bravo para la materia Construccion de Interfaces De Usuario</p>
        <a href="https://unahur.edu.ar/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo UNAHUR" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
