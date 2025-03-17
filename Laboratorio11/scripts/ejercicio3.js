document.addEventListener("DOMContentLoaded", function () {
    let compra = document.getElementById("valComp");
    let descuento = document.getElementById("desc");

    let min = Number(compra.getAttribute("min")) || 0;

    compra.addEventListener("change", function () {

        let totComp = Number(compra.value);

        if (totComp < min || isNaN(totComp)) {
            descuento.innerText = "Ingrese el valor total de su compra";
        } else if (totComp > 100) {
            let descAplicado = Math.round(totComp * 0.1);
            let totPagar = totComp - descAplicado;
            descuento.innerText = `Descuento aplicado COP: ${descAplicado}. 
            Total a pagar: ${totPagar}`;
        } else {
            descuento.innerText = "Monto no sujeto a descuento";
        }
    })

    let botonClean = document.getElementById("clear");

    botonClean.addEventListener("click", function () {
        compra.value = "";
        descuento.innerText = "";
        compra.focus();
    });
});