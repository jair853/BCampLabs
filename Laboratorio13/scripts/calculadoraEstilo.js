let pantalla = document.getElementById("pantalla");
let operacion = "";
const ident = new Map([["cero", 0], ["uno", 1], ["dos", 2], ["tres", 3], ["cuatro", 4], ["cinco", 5],
["seis", 6], ["siete", 7], ["ocho", 8], ["nueve", 9], ["suma", '+'], ["resta", '-'],
["multiplicacion", '*'], ["division", '/'], ["limpiar", 'C'], ["igual", '=']]);

function validarId(palabra) {
    let val = ident.get(palabra);
    agregarNumero(val);
}


function agregarNumero(numero) {
    operacion += numero;
    actualizarPantalla();
}


function calcularResultado() {
    if (realizarOperacion()) {
        try{
            operacion = eval(operacion).toString();
        } catch (error){
            operacion = "Error";
        }
        actualizarPantalla();
    }
}

function realizarOperacion() {
    return operacion !== "" && !/[\+\*\/\?]$/.test(operacion);
}

function limpiarPantalla() {
    operacion = "";
    actualizarPantalla();
}

function actualizarPantalla() {
    pantalla.value = operacion;
}