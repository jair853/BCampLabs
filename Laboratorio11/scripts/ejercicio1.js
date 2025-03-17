document.addEventListener("DOMContentLoaded", function () {
    let calificacion = document.getElementById("calif")
    let resultado = document.getElementById("resultado");

    let min = Number(calificacion.getAttribute("min")) || 0;
    let max = Number(calificacion.getAttribute("max")) || 100;

    calificacion.addEventListener("change", function () {

        let valor = Number(calificacion.value);

        if (valor < min || valor > max || isNaN(valor)) {
            resultado.innerText = `Ingrese un número entre ${min} y ${max}`;
        } else if (calificacion.value >= 90) {
            resultado.innerText = "Aprobado con honores";
        } else if (calificacion.value >= 70) {
            resultado.innerText = "Aprobado";
        } else {
            resultado.innerText = "Reprobado";
        }
    })

    let boton = document.getElementById("limpiar");

    boton.addEventListener("click", function () {
        calificacion.value = "";
        resultado.innerText = "";
        calificacion.focus();
    });
});
