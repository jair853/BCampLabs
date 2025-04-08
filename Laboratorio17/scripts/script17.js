document.addEventListener("DOMContentLoaded", function () {

    let mainseccion = document.getElementById("infoMain");
    let menu = document.getElementById("closeBoton");
    let cerrar = document.querySelector(".btonCerrar");
    let boton = document.getElementById("btnMenu");

    boton.addEventListener("click", function (event) {
        event.preventDefault();
        menu.style.display = "flex";
        mainseccion.style.gridTemplateColumns = "15% 5% 80%";
    })

    cerrar.addEventListener("click", function (event) {
        event.preventDefault();
        menu.style.display = "none";
        mainseccion.style.gridTemplateColumns = "5% 95%";
    })
})


function displayElement (element, event){
    event.preventDefault();
    let containerMain = document.getElementById("contain-center").children;
    for (let i = 0; i < containerMain.length; i++) {
        
        if (containerMain[i].id === element) {
            containerMain[i].style.display = "block";
            containerMain[i].focus();
            continue;
        } 
        containerMain[i].style.display = "none";
    }
}

function validarFormulario() {
    
    const formulario = document.querySelector(".field-set").children;
    for (let i = 0; i < formulario.length; i++) {

        const fieldTag = formulario[i].tagName;
        const fieldType = formulario[i].getAttribute("type");
        const fieldName = formulario[i].getAttribute("name");
        const fieldValue = formulario[i].value;

        if (fieldTag !== "INPUT") {continue;}

        if (fieldType === "submit"){continue;}
        
        if (!validarCampo(fieldValue, fieldName, fieldType)) {
            alert(`El campo ${fieldName} está vacío o no es válido!!!`)
            return false;
        } 
    }
    alert("Información enviada correctamente");
    return true;
}

function validarCampo(Fvalue, Fname, Ftype) {

    const text = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    const emailContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Fvalue) {return false;}

    if (Ftype === "text") {
        if (Fname === "Nombre") {
            return text.test(Fvalue);
        } else {
            return true;
        }
    }
    if (Ftype === "email") {
        return emailContent.test(Fvalue);
    }
    if (Ftype === "number") {
        return !isNaN(Fvalue);
    }
}

function mostrarImagen(event){
    let imagen = document.getElementById('img-load');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    imagen.width = "120";
    imagen.height = "120";
    return imagen;
   }