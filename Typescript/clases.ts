class Estudiante {
    nombreCompleto: string;

    constructor(public primerNombre: string, public segundoNombre: string, public apellidos: string){
        this.nombreCompleto = primerNombre + " " + segundoNombre + " " + apellidos;
    }
}

interface Usuario {
    primerNombre: string;
    segundoNombre: string;
    apellidos: string;
}

function saludos(usuario: Usuario){
    return "Hola " + usuario.primerNombre + " " + usuario.segundoNombre + " " + usuario.apellidos; 
}

let usuarioCompleto = new Estudiante("Cesar", "Daniel", "Perez Arredondo");

document.body.textContent = saludos(usuarioCompleto);