import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/ProductDetails.css'; // Asegúrate de que la ruta sea correcta

const ProductDetails = () => {
  const { id } = useParams(); // Obtenemos el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  const obtenerProducto = async () => {
    try {
      const response = await fetch(`http://localhost:5000/productos/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el producto');
      }
      const data = await response.json();
      setProducto(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando detalles...</p>; // Mientras cargan los detalles
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{producto.nombre}</h2>
      <img
        src={`/${producto.pathImg}`}  // Corrección: Ruta de la imagen correcta
        alt={producto.nombre}
        style={{
          width: '300px',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '5px',
        }}
      />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      {/* Mostrar fabricantes */}
      <div>
        <h3>Fabricantes:</h3>
        {producto.fabricantes && producto.fabricantes.length > 0 ? (
          <ul>
            {producto.fabricantes.map((fabricante) => (
              <li key={fabricante.id}>
                <Link to={`/fabricante/${fabricante.id}`}>{fabricante.nombre}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay fabricantes disponibles.</p>
        )}
      </div>

      {/* Mostrar componentes */}
      <div>
        <h3>Componentes:</h3>
        {producto.componentes && producto.componentes.length > 0 ? (
          <ul>
            {producto.componentes.map((componente) => (
              <li key={componente.id}>
                <Link to={`/componente/${componente.id}`}>{componente.nombre}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay componentes disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
