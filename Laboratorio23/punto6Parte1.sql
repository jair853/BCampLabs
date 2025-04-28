UPDATE empleados
SET salario = CASE
      WHEN id = 2 THEN 53000
      WHEN id = 51 THEN 15000
      ELSE  salario
END
WHERE id IN (2, 51);