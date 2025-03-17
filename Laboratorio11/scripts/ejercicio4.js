document.addEventListener("DOMContentLoaded", function () {
    let numeroDesc = document.getElementById("aleatorio");
    let coincidencia = document.getElementById("correcto");
    let intentos = document.querySelector("#cuenta");
    let botonRst = document.getElementById("limprst");

    let min = Number(numeroDesc.getAttribute("min")) || 1;
    let max = Number(numeroDesc.getAttribute("max")) || 10;
    let contador = 0;

    numeroDesc.addEventListener("change", function () {

        let numValidar = Number(numeroDesc.value);

        if (numValidar < min || numValidar > max || isNaN(numValidar)) {
            coincidencia.innerText = `Ingrese un número entre ${min} y ${max}`;
            return;
        }
        
        let numAleatorio = Math.floor(Math.random() * max) + min;

        contador++;
        intentos.innerText = contador;
        
        if (numValidar === numAleatorio) {
            coincidencia.innerText = "¡Felicidades, adivinaste el número!";
        } else {
            coincidencia.innerText = `Lo siento, el número era ${numAleatorio}.`;
        }

        numeroDesc.value = "";
        numeroDesc.focus();
    })

    botonRst.addEventListener("click", function () {
        numeroDesc.value = "";
        coincidencia.innerText = "";
        intentos.innerText = "";
        contador = 0;
        numeroDesc.focus();
    });
});