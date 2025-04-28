def descuento(precio, tasa = 10.0):
    return precio - (precio * tasa / 100)

precioProducto = int(input("Ingrese el precio: ") or 0)
tasaDescuento = float(input("Ingrese la tasa de descuento: ") or 10.0)
precioTotal = descuento(precioProducto, tasaDescuento)
print("El precio a pagar es:", precioTotal)
precioTotal = descuento(precioProducto)
print("El precio a pagar es:", precioTotal)

