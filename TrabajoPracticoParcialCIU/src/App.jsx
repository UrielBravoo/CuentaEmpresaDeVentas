import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManufacturerAndComponents from './pages/ManufacturerAndComponents';
import ProductDetails from './pages/ProductDetails'; // Importa ProductDetails
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ListaProductos />} />
            <Route path="/productos/:id" element={<ProductDetails />} /> {/* Ruta dinámica */}
            <Route path="/fabricantes-componentes" element={<ManufacturerAndComponents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
