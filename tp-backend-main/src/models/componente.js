const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Componente extends Model {}

Componente.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Componente'
})

module.exports = Componente