import React from "react";
import "../styles/Home.css";
import { Button } from "react-bootstrap"; // Importamos el botón de Bootstrap


const Home = () => {
  return (
    <div className="home-container">
      {/* Encabezado */}
      <section className="home-header">
        <h1>Bienvenido a Nuestra Empresa</h1>
        <p>
          "Empresa Bravo" es tu socio confiable en productos tecnológicos
          innovadores. Desde nuestra fundación en el año 2000, hemos trabajado
          para ofrecer soluciones de calidad que simplifiquen la vida diaria y
          potencien tus proyectos.
        </p>
      </section>

      {/* Menú de Navegación */}
      <nav className="home-nav">
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/fabricantes-componentes">Fabricantes y Componentes</a>
      </nav>

      {/* Sección de Imágenes */}
      <section>
        <h2>Explorá más productos nuestros!</h2>
        <br />
        <div className="home-images">
          <a href="https://www.youtube.com/watch?v=OgflqdynKTU" target="_blank" rel="noopener noreferrer">
            <img
              src="./images/productos/controlador-riego.jpg"
              alt="Nuestra tienda"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=y5hONOsgf1w&t=2s" target="_blank" rel="noopener noreferrer">
            <img
              src="./images/productos/smartwatch.jpg"
              alt="Nuestro equipo"
            />
          </a>
        </div>
      </section>
      <br />
      <br />

      {/* Video */}
      <section>
  <h2>Video de nuestro sistema de gestion de productos</h2>
  <iframe
    className="home-iframe"
    width="1080"
    height="720"
    src="https://www.youtube.com/embed/Ogwws5JWQOQ"
    title="Video corporativo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</section>

      <br />
      <br />

      {/* Información de Contacto */}
      <section>
        <h2>Información de Contacto</h2>
        <p>
          <strong>Dirección:</strong> Av. Gdor. Vergara 2222, B1688 Villa Tesei, Provincia de Buenos Aires
        </p>
        <p>
          <strong>Teléfono:</strong> 011 2066-1958
        </p>
        <p>
          <strong>Horario:</strong> Lunes a Viernes, de 9:00 AM a 6:00 PM
        </p>
        {/* Botón de llamada a la acción */}
        <Button variant="danger" size="lg" href="mailto:urielfrancisco.bravo@estudiantes.unahur.edu.ar">
          Contáctanos
        </Button>
      </section>
      <br />
      <br />

     {/* Mapa */}
<section>
  <h2>Encuentra nuestra ubicación</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.7077124093254!2d-58.638252924152015!3d-34.61864221791795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1691940365981!5m2!1ses-419!2sar"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <br />
  <h3>En Empresa Bravo amamos la unahur 💚 </h3>
</section><br /><br />

      {/* Pie de Página */}
      <footer className="home-footer">
        <p>
          <strong>Creador del proyecto:</strong> Uriel Bravo
        </p>
      </footer>
    </div>
  );
};

export default Home;
