const { Producto, Fabricante, Componente } = require('../models');

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Obtener un producto en particular
exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id)
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtener todos los fabricantes de un producto
exports.getFabricantesByProducto = async (req, res) => {
    try {
        const idProducto = req.params.id
        const producto = await Producto.findByPk(idProducto, {
            include: { 
                model: Fabricante, as: "Fabricantes",
                through: { attributes: [] }
            }
        })
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtener todos los componentes de un producto
exports.getComponentesByProducto = async (req, res) => {
    try {
        const idProducto = req.params.id
        const producto = await Producto.findByPk(idProducto, {
            include: { 
                model: Componente, as: "Componentes",
                through: { attributes: [] }
            }
        })
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}