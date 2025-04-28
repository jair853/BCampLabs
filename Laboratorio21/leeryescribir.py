#leer y escribir un acrhivo de texto
# Leer el contenido del archivo existente
with open('hola.txt', 'r') as archivo:
    contenido=archivo.read()
#modificar el contenido
contenido+="\n Texto adicional agregado"
#escrbir el contenido modificado de nuevo en el archivo
with open('hola.txt', 'w') as archivo:
    archivo.write(contenido)    