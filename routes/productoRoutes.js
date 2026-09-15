const express = require('express');
const router = express.Router();

const {
    listarProductos,
    obtenerProductoPorId,
    registrarProducto,
    actualizarProducto,
    eliminarProducto,
    buscarProductos
} = require('../controllers/productoController');

// GET /api/productos
router.get('/', listarProductos);
router.get('/buscar', buscarProductos);

// GET /api/productos/:id
router.get('/:id', obtenerProductoPorId);

// POST /api/productos
router.post('/', registrarProducto);

// PUT /api/productos/:id
router.put('/:id', actualizarProducto);

// DELETE /api/productos/:id
router.delete('/:id', eliminarProducto);

module.exports = router;
