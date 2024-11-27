import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProductList.css'; // Asegúrate de que la ruta sea correcta

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/productos');
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    
    <div className="productos-container">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.pathImg}
              alt={producto.nombre}
              className="producto-img"
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="price">${producto.precio.toFixed(2)}</p>
            <div className="ver-detalles-container">
              <Link to={`/productos/${producto.id}`} className="ver-detalles">
                Ver detalles
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ListaProductos;
