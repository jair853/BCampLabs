const contraseña = "se13dfM2P";
let validarContraseña;
do {
    validarContraseña = prompt("Ingresa una contraseña válida: ");
} while (validarContraseña !== contraseña);

//Se usa el bucle do...while, debido a que este permite que el código que contiene dentro del bloque
// do, se ejecute al menos una vez, aunque la condición no se cumpla.