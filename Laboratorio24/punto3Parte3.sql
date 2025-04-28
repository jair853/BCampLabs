SELECT Autores.nombre, COUNT(Libros.id) as Cantidad_Libros
FROM Libros
JOIN Autores ON Libros.Autor_ID = Autores.id
GROUP by Autores.nombre
HAVING Cantidad_Libros > 1;

--SELECT * FROM libros
