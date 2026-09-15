const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en el body

// Array de productos en memoria
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Monitor", precio: 2500 }
];

app.get("/api", (req, res) => {
    res.json("API WEBII")
    });

// Obtener todos los productos
app.get("/api/productos", (req, res) => {
    res.json(productos);
});

// Consultar un producto por id
app.get("/api/productos/:id", (req, res) => {
    const id = Number(req.params.id);

    const productoEncontrado = productos.find(p => p.id === id);

    if (!productoEncontrado) {
        return res.status(404).json({ Mensaje: "Producto no encontrado" });
    }

    res.json(productoEncontrado);
});

// Agregar un nuevo producto
app.post("/api/productos", (req, res) => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    productos.push(nuevoProducto);

    // 201 -> Creado exitosamente
    req.status(201).json(nuevoProducto);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});