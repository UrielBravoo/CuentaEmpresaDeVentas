const { Componente, Producto } = require('../models');

// Obtener todos los componentes
exports.getAllComponentes = async (req, res) => {
    try {
        const componentes = await Componente.findAll()
        res.status(200).json(componentes)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener componentes' })
    }
};

// Obtener un componente en particular
exports.getComponenteById = async (req, res) => {
    try {
        const componente = await Componente.findByPk(req.params.id)
        if (!componente) {
            return res.status(404).json({ error: 'Componente no encontrado' })
        }
        res.status(200).json(componente)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el componente' })
    }
}

// Obtener todos los productos de un componente
exports.getProductosByComponente = async (req, res) => {
    try {
        const idComponente = req.params.id
        const componente = await Componente.findByPk(idComponente, {
            include: { 
                model: Producto, as: "Productos",
                through: { attributes: [] }
            }
        })
        res.status(200).json(componente)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
