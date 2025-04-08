function validarFormulario() {
    
    const formulario = document.querySelector(".field-set").children;
    for (let i = 0; i < formulario.length; i++) {

        let fieldTag = formulario[i].tagName;
        let fieldType = formulario[i].getAttribute("type");
        let fieldName = formulario[i].getAttribute("name");
        let fieldValue = formulario[i].value;

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

    if (Ftype === "file"){
        return Fvalue;
    }

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