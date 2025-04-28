numero = input("Ingrese un número entre 1 y 999: ")
while len(numero) > 3 or not numero or int(numero) < 0:
    numero = input("Ingrese un número entre 1 y 999: ")
if len(numero) > 1:
    print("El número", numero, "tiene", len(numero), "digitos!")
else:
    print("El número", numero, "tiene", len(numero), "digito!")