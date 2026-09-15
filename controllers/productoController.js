// Producto conectado a SQL SERVER
const Producto = require('../models/Producto');
// GET /api/productos
const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        // Si no hay productos, findAll() devuelve []
        res.status(200).json(productos);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al obtener los productos"
        });
    }
};
// GET /api/productos/:id
const obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }
        res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener el producto"
        });
    }
};

// POST /api/productos
const registrarProducto = async (req, res) => {
    try {
        const {
            nombre,
            descripcion,
            precio,
            stock,
            estado
        } = req.body;
        // VALIDAR NOMBRE
        if (!nombre || nombre.trim() === "") {
            return res.status(400).json({
                mensaje: "El nombre es obligatorio"
            });
        }
        // VALIDAR PRECIO
        if (
            precio === undefined ||
            precio === null ||
            precio === "" ||
            isNaN(precio) ||
            Number(precio) <= 0
        ) {
            return res.status(400).json({
                mensaje: "El precio es obligatorio y debe ser mayor a 0"
            });
        }
        // VALIDAR STOCK
        if (
            stock === undefined ||
            stock === null ||
            stock === "" ||
            isNaN(stock) ||
            Number(stock) < 0
        ) {
            return res.status(400).json({
                mensaje: "El stock es obligatorio y no puede ser negativo"
            });
        }
        // CREAR PRODUCTO
        const nuevoProducto = await Producto.create({
            nombre,
            descripcion,
            precio,
            stock,
            estado
        });
        // 201 = Created
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al registrar el producto"
        });
    }
};

// PUT /api/productos/:id
const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nombre,
            descripcion,
            precio,
            stock,
            estado
        } = req.body;
        // BUSCAR PRODUCTO
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }
        // VALIDAR NOMBRE
        if (!nombre || nombre.trim() === "") {
            return res.status(400).json({
                mensaje: "El nombre es obligatorio"
            });
        }
        // VALIDAR PRECIO
        if (
            precio === undefined ||
            precio === null ||
            precio === "" ||
            isNaN(precio) ||
            Number(precio) <= 0
        ) {
            return res.status(400).json({
                mensaje: "El precio es obligatorio y debe ser mayor a 0"
            });
        }
        // VALIDAR STOCK
        if (
            stock === undefined ||
            stock === null ||
            stock === "" ||
            isNaN(stock) ||
            Number(stock) < 0
        ) {
            return res.status(400).json({
                mensaje: "El stock es obligatorio y no puede ser negativo"
            });
        }

        // ACTUALIZAR
        await producto.update({
            nombre,
            descripcion,
            precio,
            stock,
            estado
        });
        res.status(200).json(producto);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al actualizar el producto"
        });
    }
};

// DELETE /api/productos/:id
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }
        // Elimina el registro de SQL SERVER
        await producto.destroy();
        res.status(200).json({
            mensaje: "Producto eliminado correctamente"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al eliminar el producto"
        });
    }
};

// GET /api/productos/buscar?nombre=monitor
const buscarProductos = async (req, res) => {
    try {

        const { nombre } = req.query;
        // Si no se envia nombre
        if (!nombre) {
            return res.status(400).json({
                mensaje: "Debe proporcionar un nombre para buscar"
            });
        }
        // Op.like de node permite coincidencias parciales
        const productos = await Producto.findAll({
            where: {
                nombre: {
                    [require('sequelize').Op.like]: `%${nombre}%`
                }
            }
        });
        // Si no encuentra productos devuelve []
        res.status(200).json(productos);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: "Error al buscar productos"
        });
    }
};

module.exports = {
    listarProductos,
    obtenerProductoPorId,
    registrarProducto,
    actualizarProducto,
    eliminarProducto,
    buscarProductos
};