const express = require('express');
const router = express.Router();
const fabricanteController = require('../controllers/fabricanteController');

// Rutas para Fabricantes
router.get('/', fabricanteController.getAllFabricantes); // Obtener todos los fabricantes
router.get('/:id', fabricanteController.getFabricanteById); // Obtener un fabricante en particular

// Rutas para obtener productos de un fabricante
router.get('/:id/productos', fabricanteController.getProductosByFabricante); // Obtener todos los productos de un fabricante

module.exports = router;
