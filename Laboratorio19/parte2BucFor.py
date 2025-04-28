coord1 = 0
coord2 = 0
coord3 = 0
coord4 = 0

nCoord = int(input("Ingrese el número de puntos: ") or 0)

for coord in range(nCoord):
    x = int(input("Ingrese la coordenada X: ") or 0)
    y = int(input("Ingrese la coordenada y: ") or 0)
    if x > 0 and y > 0:
        coord1 += 1
    elif x > 0 and y < 0:
        coord4 += 1
    elif x < 0 and y > 0:
        coord2 += 1
    elif x < 0 and y < 0:
        coord3 += 1
    else:
        print("No se ha ingresado ninguna coordenada!")

print("Se han ingresado", coord1, "puntos en el cuadrante 1")
print("Se han ingresado", coord2, "puntos en el cuadrante 2")
print("Se han ingresado", coord3, "puntos en el cuadrante 3")
print("Se han ingresado", coord4, "puntos en el cuadrante 4")