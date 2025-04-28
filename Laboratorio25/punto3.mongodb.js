use ('base1');
db.libros.insertMany([
    {
        _id: 3,
        nombre: 'Aprenda PHP',
        autor: 'Mario Molina',
        editoriales: ['Siglo XXI','Planeta'],
        precio: 50,
        cantidad: 20
    },
    {
        _id: 4, 
        nombre: 'Java en 10 minutos', 
        editoriales: ['Siglo XXI'], 
        precio: 45, 
        cantidad: 1
    }
]);
db.libros.find();