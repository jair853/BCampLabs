def sumElementos(lista):
    suma = 0
    for n in range(len(lista)):
        suma += lista[n]
    return suma

def maxElementos(lista):
    maximo = 0
    for n in lista:
        if n > maximo:
            maximo = n
    return maximo

def minElementos(lista, minimo):
    for n in lista:
        if n < minimo:
            minimo = n
    return minimo

elemList = [4, 24, 12, 56, 37, 9]

# Si los valores son capturados desde la entrada del usuario, entonces
# convertimos los valores de cadenas a números enteros (opcional)
# elemList = input("Ingrese 6 valores enteros: ")
# if isinstance(elemList, str):
#     elemList = [n.strip() for n in elemList.split(",")]
#     elemList = [int(n) for n in elemList]

print(f"La suma de los números de la lista es: {sumElementos(elemList)}")
maxElem = maxElementos(elemList)
print(f"El número más grande de la lista es: {maxElem}")
print(f"El número más pequeño de la lista es: {minElementos(elemList, maxElem)}")