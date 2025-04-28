#lectura de un archivo
#abrir el archivo en modo lectura
with open('hola.txt','r')  as archivo:
    #leer cada linea del archivo
 for linea in archivo:
  print(linea.strip())
  #imprimir la linea sin caracteres de salto de linea