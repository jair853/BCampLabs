#abrir el archivo en modo binario
with open('logo.png', 'rb') as archivo:
    datos_binarios=archivo.read()
#escribir los datos binarios en otro archivo
with open('copia_logo.png', 'wb') as archivo_copia:
    archivo_copia.write(datos_binarios)