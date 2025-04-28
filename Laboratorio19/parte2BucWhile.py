nEmpleados = int(input("Ingrese el número de empleados de la empresa: ") or 0)
x = 1
conta1 = 0
conta2 = 0
gastos = 0
sueldo = 0

while x <= nEmpleados:
    sueldo = float(input("Ingrese el sueldo del empleado: "))
    gastos += sueldo
    if sueldo >= 1000000 and sueldo <= 3000000:
        conta1 += 1
    elif sueldo > 3000000:
        conta2 += 1
    x += 1

print("El número de empleados que gana entre 1000000 y 3000000 es:", conta1)
print("El número de empleados que gana más de 3000000 es:", conta2)
print("La Empresa tiene un gasto total de nómina de:", gastos)