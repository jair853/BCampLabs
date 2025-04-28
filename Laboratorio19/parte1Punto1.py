def parImpar(numero):
    return numero % 2 == 0

numero = int(input("Ingresa un número: "))
if parImpar(numero):
    print(f"{numero} es Par")
else:
    print(f"{numero} es Impar")