const express = require('express');
const sequelize = require('./config/database');
const app = express();
const Producto = require('./models/Producto');
const productoRoutes = require('./routes/productoRoutes');

app.use(express.json());

app.use('/api/productos', productoRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log(
            'Conexion a la base de datos establecida correctamente.'
        );
    })
    .catch((error) => {
        console.error(
            'Error al conectar a la base de datos:',
            error
        );
    });
sequelize
    .sync()
    .then(() => {
        console.log(
            'Base de datos sincronizada correctamente.'
        );
    })
    .catch((error) => {
        console.log(
            'Error al sincronizar la base de datos:',
            error
        );
    });
app.listen(3000, () => {
    console.log(
        'Servidor ejecutandose en http://localhost:3000'
    );
});