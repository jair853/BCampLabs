DELETE u1 FROM empleados u1
JOIN empleados u2 
  ON u1.nombres = u2.nombres 
  AND u1.apellidos = u2.apellidos 
  AND u1.puesto = u2.puesto
  AND u1.salario = u2.salario
  AND u1.edad = u2.edad
  AND u1.celular = u2.celular
  AND u1.direccion = u2.direccion
  AND u1.id > u2.id;
