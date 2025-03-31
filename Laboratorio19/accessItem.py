vehiculos = list(('carros', 'barcos', 'aviones', 'trenes', 'motocicletas'))

for i in range(0,3):
    print(vehiculos[i])
    
i = len(vehiculos)
print(len(vehiculos))
while i > 2:
    print(vehiculos[i - 1])
    i -= 1
    
vehiculos.append("bicicletas")
#vehiculos.remove("aviones")
#vehiculos.remove(vehiculos[0])
vehiculos.pop()
print(vehiculos)