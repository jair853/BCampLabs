use ('act3');

db.estudiantes.insertMany([
    {
        _id: 1,
        nombre: 'Juan',
        edad: 20,
        ciudad: 'Bogotá',
    },
    {
        _id: 2,
        nombre: 'Ana',
        edad: 22,
        ciudad: 'Medellín',
    },
    {
        _id: 3,
        nombre: 'Luis',
        edad: 19,
        ciudad: 'Cali'
    }
]);
db.estudiantes.find();
db.estudiantes.find({ciudad: {$eq: 'Bogotá'}});
db.estudiantes.find({ciudad: {$eq: 'Cali'}});
db.estudiantes.find({ciudad: {$eq: 'Medellín'}});
db.estudiantes.find({edad: {$gt: 20}});