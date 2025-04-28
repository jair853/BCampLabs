DELETE u1 FROM autores u1
JOIN autores u2 
  ON u1.nombre = u2.nombre
  AND u1.nacionalidad = u2.nacionalidad
  AND u1.id > u2.id;
