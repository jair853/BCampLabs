nombre = input("¿Cuál es tu nombre?: ").capitalize()
estaInscrito = input("¿Estás inscrito en el curso de programación(s/n)?: ").lower()
esEstudiante = True
if 's' not in estaInscrito:
    esEstudiante = False
    print(f"Es estudiante de programación: {esEstudiante}")
else:
    print(f"Es estudiante de programación: {esEstudiante}")
    
numSesiones = 0
totalSesiones = 40.0
porcentajeAvance = 0.0

if not esEstudiante:
    print(f"Hola {nombre}. No estás registrado en el curso de programación!")
else:
    numSesiones = int(input("¿Cuántas sesiones has realizado en el curso?: "))
    porcentajeAvance = numSesiones / totalSesiones * 100.0
    print(f"Hola {nombre}. Con {numSesiones} sesiones cumplidas, has alcanzado un {porcentajeAvance}% de avance en el curso!")
