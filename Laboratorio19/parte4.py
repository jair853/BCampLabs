estudiantes = {
    'Juan': 5.0,
    'Ana': 4.2,
    'Luis': 4.5
}

nuevoEstudiante =  input("Ingrese el nuevo estudiante y su calificación, separados por dos puntos(':'): " ).capitalize()
clave, valor = nuevoEstudiante.split(":")
estudiantes[clave] = valor

print(estudiantes)
for clave, valor in estudiantes.items():
    print(f"{clave} obtuvo una calificación de: {valor}")