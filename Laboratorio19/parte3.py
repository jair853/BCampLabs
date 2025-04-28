calificaciones = {
    'Jorge Jimenez' : 4.0,
    'Sandra Ferreira' : 3.8,
    'Marta Perea' : 4.5,
    'Pedro Rosado': 3.7
}

nombre_max = max(calificaciones, key= calificaciones.get)
print(f"El estudiante con la calificación más alta es {nombre_max} con una calificación de {calificaciones[nombre_max]}.")