import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ProductList.css";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState({});

  // Obtener los productos desde el servidor
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

  // Calcular el precio total basado en los productos seleccionados
  const calcularTotal = () => {
    const total = seleccionados.reduce((acc, producto) => {
      const cantidad = cantidadSeleccionada[producto.id] || 0;
      const precio = producto.precio || 0;
      return acc + (cantidad * precio);
    }, 0);
    setPrecioTotal(total);
  };

  // Manejar la selección de un producto
  const manejarSeleccion = (producto) => {
    setSeleccionados(prevSeleccionados => {
      const index = prevSeleccionados.findIndex(item => item.id === producto.id);
      if (index === -1) {
        return [...prevSeleccionados, producto]; // Agregar el producto completo
      } else {
        return prevSeleccionados.filter(item => item.id !== producto.id); // Eliminar si ya estaba seleccionado
      }
    });
  };

  // Manejar la cantidad seleccionada de un producto
  const manejarCantidad = (productoId, cantidad) => {
    if (cantidad >= 1) {
      setCantidadSeleccionada(prev => ({ ...prev, [productoId]: cantidad }));
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    calcularTotal(); // Recalcular total cada vez que cambian los productos seleccionados o las cantidades
  }, [seleccionados, cantidadSeleccionada]);

  return (
    <div>
      <div className="Titulo">
        <h1>Lista De Productos</h1>
      </div>
    
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

              <div className="cantidad-container">
                <label
                  onClick={() => manejarSeleccion(producto)}
                  className="cantidad-label"
                >
                  {seleccionados.some(item => item.id === producto.id) ? 'Cantidad' : 'Seleccionar'}
                </label>

                {seleccionados.some(item => item.id === producto.id) && (
                  <div className="cantidad-selector">
                    <button
                      className="cantidad-button"
                      onClick={() => manejarCantidad(producto.id, (cantidadSeleccionada[producto.id] || 1) - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={cantidadSeleccionada[producto.id] || 1}
                      onChange={(e) => manejarCantidad(producto.id, parseInt(e.target.value))}
                      className="cantidad-input"
                    />
                    <button
                      className="cantidad-button"
                      onClick={() => manejarCantidad(producto.id, (cantidadSeleccionada[producto.id] || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

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

        {/* Contenedor de Total fuera de la lista de productos */}
        <div className="total-container">
          <button onClick={calcularTotal} className="calcular-total-btn">
            Calcular Total
          </button>
          <p className="total-price">Total: ${precioTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ListaProductos;
