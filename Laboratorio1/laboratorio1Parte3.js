let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("¿Puede conducir?:", puedeConducir);

puedeConducir = esMayorDeEdad || tieneLicencia;

console.log("¿Puede conducir?:", puedeConducir);


let nombre = prompt("¿Cuál es tu nombre? ");
let apellido = prompt("¿Cuál es tu apellido? ");

console.log("Hola " + nombre + " " + apellido );

console.log("Hola", `${nombre} ${apellido},`, "bienvenid@ a la academia de conducción Buen Conductor.");
