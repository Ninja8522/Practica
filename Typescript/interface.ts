interface Persona {
    primerNombre: string;
    segundoNombre: string;
}

function saludo(persona: Persona){
    return "Hola, "+persona.primerNombre + ' ' +persona.segundoNombre;
}

let llamarUsuario = {primerNombre: "Cesar", segundoNombre: "Daniel"};
let segundoUsuario = {primerNombre: "Jose", segundoNombre: "Ramon"};

document.body.textContent = saludo(segundoUsuario);