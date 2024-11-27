const { Fabricante, Producto } = require('../models');

// Obtener todos los fabricantes
exports.getAllFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll()
        res.status(200).json(fabricantes)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener fabricantes' })
    }
}

// Obtener un fabricante en particular
exports.getFabricanteById = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id)
        if (!fabricante) {
            return res.status(404).json({ error: 'Fabricante no encontrado' })
        }
        res.status(200).json(fabricante)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el fabricante' })
    }
}

// Obtener todos los productos de un fabricante
exports.getProductosByFabricante = async (req, res) => {
    try {
        const idFabricante = req.params.id
        const fabricante = await Fabricante.findByPk(idFabricante, {
            include: { 
                model: Producto, as: "Productos",
                through: { attributes: [] }
            }
        })
        res.status(200).json(fabricante)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos del fabricante' })
    }
}
