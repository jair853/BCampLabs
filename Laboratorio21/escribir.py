#escritura de un archivo de texto
#lista de lineas a escribir en el achivo
lineas=["linea uno","linea dos", "linea tres","linea cuatro"]
#abrir el archivo en modo esritura
with open('archivo_escribir.txt','w') as archivo:
    #escribir cada linea en el archivo
 for linea in lineas:
  archivo.write(linea + '\n')#añadir un salto de linea