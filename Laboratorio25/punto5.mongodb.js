use ('base1');

db.libros.drop();
db.libros.find();

db.articulos.insertMany([
    {
        _id: 1,
        nombre: 'MULTIFUNCION HP DESKJET 2675', 
        rubro: 'impresora',
        precio: 3000, 
        stock: 20
    },
    {
        _id: 2,
        nombre: 'MULTIFUNCION EPSON EXPRESSION XP241', 
        rubro: 'impresora',
        precio: 3700,
        stock: 5
    },
    {
        _id: 3,
        nombre: 'LED 19 PHILIPS',
        rubro: 'monitor',
        precio: 4500,
        stock: 2
    },
    {
        _id: 4,
        nombre: 'LED 22 PHILIPS',
        rubro: 'monitor',
        precio: 5700,
        stock: 4
    }
]);

db.articulos.find();
db.articulos.find( {rubro: {$nin: ['impresora']}});
db.articulos.find( {rubro: {$in: ['mouse']}});
db.articulos.find( { precio: { $gte: 5000}});