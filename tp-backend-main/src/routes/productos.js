const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas para Productos
router.get('/', productoController.getAllProductos); // Obtener todos los productos
router.get('/:id', productoController.getProductoById); // Obtener un producto en particular

// Rutas para asociar Fabricantes a Productos
router.get('/:id/fabricantes', productoController.getFabricantesByProducto); // Obtener todos los fabricantes de un producto

// Rutas para asociar Componentes a Productos
router.get('/:id/componentes', productoController.getComponentesByProducto); // Obtener todos los componentes de un producto

module.exports = router;
