const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Producto extends Model {}

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pathImg: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Producto'
})

module.exports = Producto