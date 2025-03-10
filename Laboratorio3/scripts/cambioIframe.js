// LLAMA LA PÁGINA QUE CONTIENE INFORMACIÓN SOBRE LOS
// ELEMENTOS DE HTML Y LA MUESTRA EN EL CUADRO INTERNO (IFRAME)

/* Adiciona el evento DOMContentLoaded para prevenir que el 
script se ejecute antes que cargue todo el contenido 
de la página */

document.addEventListener("DOMContentLoaded", function () {
    let elementHtml = document.getElementById("elemtHtml");
    let mainIframe = document.getElementById("main-iframe");

/* Llama al evento  preventDefault para evitar que el atributo
href del elemento <a> actualize la página cuando se ejecuta
el scrip */

    elementHtml.addEventListener("click", function (event) {
        event.preventDefault();

/* Cambia el atributo src del elemento iframe para que muestre
la página que se llama */

        mainIframe.setAttribute("src", "elementosHtml.html");

// Inactiva temporalmente la imagen de fondo del elemento iframe

        let iframeContainer = document.querySelector(".iframe div");
        if (iframeContainer) {
            iframeContainer.style.backgroundImage = "none";
        }
    });
});

// LLAMA LA PÁGINA QUE CONTIENE INFORMACIÓN SOBRE 
// LOS ATRIBUTOS DE HTML Y LA MUESTRA EN EL CUADRO
// INTERNO (IFRAME)

/* Adiciona el evento DOMContentLoaded para prevenir que el 
script se ejecute antes que cargue todo el contenido 
de la página */
document.addEventListener("DOMContentLoaded", function () {
    let atributosHtml = document.getElementById("atribHtml");
    let mainIframe = document.getElementById("main-iframe");

/* Llama al evento  preventDefault para evitar que el atributo
href del elemento <a> actualize la página cuando se ejecuta
el scrip */
    atributosHtml.addEventListener("click", function (event) {
        event.preventDefault();

/* Cambia el atributo src del elemento iframe para que muestre
la página que se llama */
        mainIframe.setAttribute("src", "atributosHtml.html");

// Inactiva temporalmente la imagen de fondo del elemento iframe
        let iframeContainer = document.querySelector(".iframe div");
        if (iframeContainer) {
            iframeContainer.style.backgroundImage = "none";
        }
    });
});


// LLAMA LA PÁGINA QUE CONTIENE INFORMACIÓN SOBRE
// JAVASCRIPT Y LA MUESTRA EN EL CUADRO INTERNO (IFRAME)

/* Adiciona el evento DOMContentLoaded para prevenir que el 
script se ejecute antes que cargue todo el contenido 
de la página */
document.addEventListener("DOMContentLoaded", function () {
    let interactJS = document.getElementById("intJS");
    let mainIframe = document.getElementById("main-iframe");

/* Llama al evento  preventDefault para evitar que el atributo
href del elemento <a> actualize la página cuando se ejecuta
el scrip */
    interactJS.addEventListener("click", function (event) {
        event.preventDefault();

/* Cambia el atributo src del elemento iframe para que muestre
la página que se llama */
        mainIframe.setAttribute("src", "js.html");

// Inactiva temporalmente la imagen de fondo del elemento iframe
        let iframeContainer = document.querySelector(".iframe div");
        if (iframeContainer) {
            iframeContainer.style.backgroundImage = "none";
        }
    });
});

// LLAMA LA PÁGINA QUE CONTIENE INFORMACIÓN SOBRE LOS
// FORMATOS DE ESTILO EN CSS Y LA MUESTRA EN EL CUADRO
// INTERNO (IFRAME)


/* Adiciona el evento DOMContentLoaded para prevenir que el 
script se ejecute antes que cargue todo el contenido 
de la página */
document.addEventListener("DOMContentLoaded", function () {
    let estlCss = document.getElementById("estiloCss");
    let mainIframe = document.getElementById("main-iframe");

/* Llama al evento  preventDefault para evitar que el atributo
href del elemento <a> actualize la página cuando se ejecuta
el scrip */
    estlCss.addEventListener("click", function (event) {
        event.preventDefault();

/* Cambia el atributo src del elemento iframe para que muestre
la página que se llama */
        mainIframe.setAttribute("src", "estilosCss.html");

// Inactiva temporalmente la imagen de fondo del elemento iframe
        let iframeContainer = document.querySelector(".iframe div");
        if (iframeContainer) {
            iframeContainer.style.backgroundImage = "none";
        }
    });
});