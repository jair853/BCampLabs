use ('base1');

db.libros.insertOne(
    {
    '_id': 1, 
    'nombre': 'El aleph',
    'autor': 'Borges',
    'editoriales': ['Planeta', 'Siglo XXI'],
    'precio': 20,
    'cantidad': 50
    }
);
db.libros.insertOne(
    {
    '_id': 2, 
    'nombre': 'Martin Fierro',
    'autor': 'Jose Hernandez',
    'editoriales': ['Planeta'],
    'precio': 50,
    'cantidad': 12
    }
);

db.libros.find();