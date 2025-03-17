let arreglonumeros = [2, 3, 23, 1, 14, 8, 15];
let totalnumeros = arreglonumeros.length;

let suma = 0;

for (i = 0; i < totalnumeros; i++) {
    suma += arreglonumeros[i];
}

alert(suma);
// El código se puede modificar de la siguiente manera:

let promedio = 0;
promedio = suma / totalnumeros;
alert(promedio);