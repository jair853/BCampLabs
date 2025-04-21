import math
#--------------------Actividad 1 Paso 2 item 1
numeroParImpar = int(input("Ingresa un número: "))

def parImpar(numero):
    return numero % 2 == 0
    
print(f"{numeroParImpar} es Par" if parImpar(numeroParImpar) else f"{numeroParImpar} es Impar")

#---------------------Actividad 1 Paso 2 item 2
numList = list((2, 5, 9, 29, 13, 45, 12, 93, 84))

for num in numList:
    print(pow(num, 2))
#---------------------Actividad 1 Paso 2 item 3
while True:
    numero = int(input("Ingresa un número: "))
    if numero > 10:
        print(f"{numero} es Par" if parImpar(numero) else f"{numero} es Impar")
        break
    else:
        print("Ingresa un número mayor a 10")