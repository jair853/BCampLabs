function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (Number.isNaN(numero)) {
            alert("Entrada no válida. Ingresa un número válido.");
        }
    } while (Number.isNaN(numero));
    return numero;
}

function calcularResultado(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num2 === 0 ? "Error: División por 0" : num1 / num2;
        default:
            return "Operación no válida";
    }
}

// Bucle principal
let aritmetica;
do {
    aritmetica = prompt("Ingresa la operación (suma, resta, multiplicacion, division) o 'salir': ").toLowerCase();

    if (aritmetica === "salir") break;
    if (!["suma", "resta", "multiplicacion", "division"].includes(aritmetica)) {
        alert("Operación no válida. Intenta nuevamente.");
        continue;
    }

    let numero1 = obtenerNumero("Ingresa el primer número:");
    let numero2 = obtenerNumero("Ingresa el segundo número:");
    
    alert(`Resultado: ${calcularResultado(numero1, numero2, aritmetica)}`);
} while (true);

alert("Has dejado de utilizar la calculadora. Hasta pronto!");
