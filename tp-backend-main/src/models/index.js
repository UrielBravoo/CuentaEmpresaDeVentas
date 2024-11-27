//const sequelize = require('../config/database')
const Producto = require('./producto')
const Fabricante = require('./fabricante')
const Componente = require('./componente')

// Relaciones de muchos a muchos
Producto.belongsToMany(Fabricante, { through: 'ProductoFabricante' })
Fabricante.belongsToMany(Producto, { through: 'ProductoFabricante' })

Producto.belongsToMany(Componente, { through: 'ProductoComponente' })
Componente.belongsToMany(Producto, { through: 'ProductoComponente' })

// Sincronizar la base de datos
//sequelize.sync()

module.exports = { Producto, Fabricante, Componente }