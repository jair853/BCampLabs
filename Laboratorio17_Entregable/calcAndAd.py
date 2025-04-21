import random
import math
#-------------------Actividad 1 Paso 4 item 1
nombre = input("Hola, ¿cómo te llamas? ").capitalize()
numero1 = int(input("Ingresa un número: "))
numero2 = int(input("Ingresa el segundo número: "))
operacion = input("¿Qué operación deseas realizar? (suma, resta, multiplicación, división) ")
match operacion:
    case "suma":
        print(f"{nombre} el resultado de sumar {numero1} + {numero2} es {numero1 + numero2}")    
    case "resta":
        print(f"{nombre} el resultado de restar {numero1} - {numero2} es {numero1 - numero2}")
    case "multiplicación":
        print(f"{nombre} el resultado de multiplicar {numero1} * {numero2} es {numero1 * numero2}")
    case "división":
        print(f"{nombre} el resultado de dividir {numero1} / {numero2} es {numero1/numero2}" if numero2 != 0 else f"Lo siento {nombre}, no es posible dividir por 0")
    case _:
        print("Ingresa una operación válida/verifica el nombre de la operación")

#-------------------Actividad 1 Paso 4 item 2

while True:
    
    while True:
        numeroOculto = round((random.random()) * 10)
        usuarioNumero = int(input("Adivina el número oculto: "))
        if numeroOculto != usuarioNumero:
            print("Intenta de nuevo")
        else:
            print(f"Excelente, haz acertado el número. El número es {numeroOculto}")
            break
    
    nuevoIntento = input("¿Deseas hacer un nuevo intento? (s/n): ")
    if nuevoIntento != "s":
        print("Hasta la próxima")
        break
