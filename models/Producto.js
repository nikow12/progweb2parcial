// Modelo Producto
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define(
    'Producto',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: 'productos',
        timestamps: false
    }
);

module.exports = Producto;
