use ('base1');

db.libros.find({_id : 1})
db.libros.find({precio : 50 })
db.libros.find({precio : 50, cantidad : 20 })
db.libros.updateOne(
    { _id: 1 },
    { $set: { precio: 35 } }
);
db.libros.find()
db.libros.find({ precio: { $gt:40 }});
db.libros.find({ cantidad : { $gte: 50 }});
db.libros.find( { cantidad: { $ne: 50 }});
db.libros.find ( {precio: {$gte: 20, $lte: 45}});
db.libros.find( {editoriales: {$in: ['Planeta'] }});
db.libros.find( {editoriales: {$nin: ['Planeta']}});