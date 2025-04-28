UPDATE empleados
SET celular = CASE 
    WHEN id = 52 THEN 350340943
    WHEN id = 61 THEN 319046320
    ELSE celular
END
WHERE id IN (52, 61);