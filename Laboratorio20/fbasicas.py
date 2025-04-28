def bienvenida(nombre):
    print(f"Hello, {nombre}!")

bienvenida(input("Ingresa tu nombre: ").capitalize())

import math
def area_circulo(radio):
    return math.pi * pow(radio, 2)

area = int(input("Ingresa el radio del círculo: "))
print(f"el área del círculo es: {area_circulo(area):.2f}")