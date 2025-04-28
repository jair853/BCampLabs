def maxLongitud(cadena):
    masCaracteres = ""
    for n in range(len(cadena)):
        if len(cadena[n]) > len(masCaracteres):
            masCaracteres = cadena[n]
    return masCaracteres

listCadena = ["primavera", "otoño", "invierno", "verano", "playa", "nieve"]

print(f"La cadena con más caracteres es \"{maxLongitud(listCadena)}\"")