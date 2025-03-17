document.addEventListener("DOMContentLoaded", function () {
    let numero = document.getElementById("parImpar");
    let validar = document.getElementById("numParImp");

    let min = Number(numero.getAttribute("min")) || 0;

    numero.addEventListener("change", function () {

        let parImp = Number(numero.value);

        if (parImp < min || isNaN(parImp)) {
            validar.innerText = `Ingrese un número mayor que ${min}`;
        } else if (parImp % 2 == 0) {
            validar.innerText = "El número es par";
        } else {
            validar.innerText = "El número es impar";
        }
    })

    let botonLimp = document.getElementById("rst");

    botonLimp.addEventListener("click", function () {
        numero.value = "";
        validar.innerText = "";
        numero.focus();
    });
});