# progweb2parcial

Nombre del estudiante, materia y descripción breve del proyecto.
Nikolay Gorelkin Wills y Fernando Daza Arias
Programacion Web II
Primer parcial 

❖ Tecnologías utilizadas: 
Node.js, Express, Sequelize, SQL Server y Postman.
❖ Pasos mínimos para instalar dependencias, configurar variables de entorno y ejecutar el proyecto.
dependencias:
 node
 express
sequelize

❖ Evidencias legibles de GET, GET por ID, POST, PUT, DELETE y Buscar realizadas en Postman.
GET:
200 OK
[
    {
        "id": 1,
        "nombre": "Monitor LG 24 pulgadas",
        "descripcion": "Monitor IPS Full HD",
        "precio": 1850.5,
        "stock": 10,
        "estado": true
    }
]
GET por ID 1:
200 OK
{
    "id": 1,
    "nombre": "Monitor LG 24 pulgadas",
    "descripcion": "Monitor IPS Full HD",
    "precio": 1850.5,
    "stock": 10,
    "estado": true
}

POST:
201 Created
{
    "id": 1,
    "nombre": "Monitor LG 24 pulgadas",
    "descripcion": "Monitor IPS Full HD",
    "precio": 1850.5,
    "stock": 10,
    "estado": true
}
POST SIN NOMBRE:
400 Bad Request
The request cannot be fulfilled due to bad syntax.
{
    "mensaje": "El nombre es obligatorio"
}

PUT con id 2:
200 OK
{
    "id": 2,
    "nombre": "prueba de update producto 2 ",
    "descripcion": "descripcion 2",
    "precio": 50,
    "stock": 20,
    "estado": true
}
PUT con id 6:
404 Not Found
The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
{
    "mensaje": "Producto no encontrado"
}

BUSQUEDA con parametro buscar?nombre=producto
200 OK
[
    {
        "id": 2,
        "nombre": "prueba de update producto 2 ",
        "descripcion": "descripcion 2",
        "precio": 50,
        "stock": 20,
        "estado": true
    }
]

DELETE con id 3:
200 OK
{
    "mensaje": "Producto eliminado correctamente"
}

❖ Evidencias de SQL Server donde pueda comprobarse que las operaciones realizadas desde Postman
se reflejan en la base de datos

SELECT * FROM productos

1	Monitor LG 24 pulgadas	Monitor IPS Full HD	1850.50	10	1
2	prueba de update producto 2 	descripcion 2	50.00	20	1
3	producto para borrar 3 	descripcion 3	50.00	20	1


DESPUES DEL DELETE

SELECT * FROM productos 

1	Monitor LG 24 pulgadas	Monitor IPS Full HD	1850.50	10	1
2	prueba de update producto 2 	descripcion 2	50.00	20	1