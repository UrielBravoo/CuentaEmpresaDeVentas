import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ManufacturerAndComponents = () => {
  // Estado para los fabricantes y componentes
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Función para obtener los fabricantes y componentes desde la API
  const fetchData = async () => {
    try {
      // Obtener fabricantes
      const fabricantesResponse = await axios.get('http://localhost:5000/fabricantes');
      setFabricantes(fabricantesResponse.data);

      // Obtener componentes
      const componentesResponse = await axios.get('http://localhost:5000/componentes');
      setComponentes(componentesResponse.data);

      setLoading(false); // Termina la carga
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
      setError("Hubo un problema al cargar los datos.");
      setLoading(false); // Termina la carga incluso si hay error
    }
  };

  // Usar useEffect para ejecutar la función fetchData al cargar el componente
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center"><h2>Cargando...</h2></div>;
  }

  if (error) {
    return <div className="text-center text-danger"><h2>{error}</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Fabricantes y Componentes</h1>

      {/* Botones de Navegación */}
      <div className="d-flex justify-content-center mb-4">
        <a href="#fabricantes" className="btn btn-secondary mx-2">Fabricantes</a>
        <a href="#componentes" className="btn btn-secondary mx-2">Componentes</a>
      </div>

      {/* Sección de Fabricantes */}
      <section id="fabricantes">
        <h2>Lista de Fabricantes</h2>
        <ul className="list-group">
          {fabricantes.length > 0 ? (
            fabricantes.map((fabricante) => (
              <li className="list-group-item" key={fabricante.id}>
                <h5>{fabricante.nombre}</h5>
                <p>Dirección: {fabricante.direccion}</p>
                <p>Contacto: {fabricante.numeroContacto}</p>
              </li>
            ))
          ) : (
            <p>No hay fabricantes disponibles.</p>
          )}
        </ul>
      </section>

      <hr />

      {/* Sección de Componentes */}
      <section id="componentes">
        <h2>Lista de Componentes</h2>
        <ul className="list-group">
          {componentes.length > 0 ? (
            componentes.map((componente) => (
              <li className="list-group-item" key={componente.id}>
                <h5>{componente.nombre}</h5>
                <p>Descripción: {componente.descripcion}</p>
              </li>
            ))
          ) : (
            <p>No hay componentes disponibles.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default ManufacturerAndComponents;
