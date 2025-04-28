SELECT libros.titulo,
       autores.nombre,
       libros.año_publicacion
FROM libros
JOIN autores ON libros.Autor_ID = autores.id
WHERE libros.año_publicacion > 2000;

SELECT * FROM Autores;
SELECT * FROM libros;