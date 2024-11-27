const express = require('express');
const router = express.Router();
const componenteController = require('../controllers/componenteController');

// Rutas para Componentes
router.get('/', componenteController.getAllComponentes); // Obtener todos los componentes
router.get('/:id', componenteController.getComponenteById); // Obtener un componente en particular

// Rutas para obtener productos de un componente
router.get('/:id/productos', componenteController.getProductosByComponente); // Obtener todos los productos de un componente

module.exports = router;
