SELECT libros.titulo,
       autores.nombre
FROM libros
JOIN autores ON libros.Autor_ID = autores.id
WHERE libros.Autor_ID = 2;