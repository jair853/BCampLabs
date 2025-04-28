#----------------Actividad 1 Paso 3 item 1
estudiantes = ["Carlos", "Ximena", "Mauricio", "Kelly"]

for estudiante in estudiantes:
    print(estudiante)

#----------------Actividad 1 Paso 3 item 2

persona = {
    "persona1" : {
        "Nombre" : "Ernesto Guevara", 
        "Correo_Electrónico" : "ernestog123@hotmail.com"
    },
    "persona2": {
    "Nombre": "Juan Freyle",
    "Correo_Electrónico" : "jfreyle2025@livemail.com"
    }
}

for key, value in persona.items():
    print(f"{key}: ")
    for subkey, subvalue in value.items():
        print(f"{subkey} : {subvalue}")


#---------------Actividad 1 Paso 3 item 3

comidas_rapidas = []
def validarPrecio(precio):
    return precio > 0

def crearMenu():
    while True:
        categoria = dict()
        while True:
            nombre = input("Ingrese el nombre de la categoría: ").capitalize()
            categoria[nombre] = dict()
            while True:
                presentacion = input("Ingrese la presentación: ").capitalize()
                categoria[nombre][presentacion] = dict()
                ingredientes = input("Ingrese lista de ingredientes: ")
                if isinstance(ingredientes, str):
                    ingredientes = [i.strip() for i in ingredientes.split(",")]
                    ingredientes = [i.title() for i in ingredientes]
                categoria[nombre][presentacion]["ingredientes"] = ingredientes
                adicionales = input("Ingrese ingredientes adicionales especiales: ")
                if isinstance(adicionales, str):
                    adicionales = [i.strip() for i in adicionales.split(",")]
                    adicionales = [i.title() for i in adicionales]
                categoria[nombre][presentacion]["adicionales"] = adicionales
                precio = float(input("Ingrese el precio del producto para la presentación escogida: ") or 0)
                
                while not validarPrecio(precio):
                    precio = float(input("Ingrese un precio válido: "))
                
                categoria[nombre][presentacion]["precio"] = precio
                
                print("Precio ingresado con éxito")
                
                print("Presentación ingresada o actualizada con éxito")
                
                nuevaPresentación = input("¿Desea ingresar una nueva presentación de la categoría? (s/n): ").strip().lower()
                
                if  "s" not in nuevaPresentación:
                    break
            
            comidas_rapidas.append(categoria)
            
            print("Categoría ingresada con éxito")
            break
            
        nuevaCategoria = input("Desea agregar una nueva categoría de producto (s/n): ").strip().lower()
            
        if "s" not in nuevaCategoria:
            break
        
    print("Registro finanlizado")
     
crearMenu()

print("\n Menu:")
for i, categoria in enumerate(comidas_rapidas, 1):
    print(f"{i}:")
    for key, value in categoria.items():
        for subkey, subvalue in value.items():
            print(f"{key} : {subkey}")
            for suikey, suivalue in subvalue.items():
                print(f"{suikey}: {suivalue}")
            
            print("_" * 12)
            
    print("_" * 20)