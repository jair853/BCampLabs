#manejo de excepciones al trabaja r con archivo
try:
    with open('no_exite.txt','r') as archivo:
        contenido=archivo.read()
        print(contenido)
except FileNotFoundError:
    print("El archivo no existe...")
except IOError:
    print("Ocurrio un error al leer el archivo...")