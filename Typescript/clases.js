var Estudiante = /** @class */ (function () {
    function Estudiante(primerNombre, segundoNombre, apellidos) {
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.apellidos = apellidos;
        this.nombreCompleto = primerNombre + " " + segundoNombre + " " + apellidos;
    }
    return Estudiante;
}());
function saludos(usuario) {
    return "Hola " + usuario.primerNombre + " " + usuario.segundoNombre + " " + usuario.apellidos;
}
var usuarioCompleto = new Estudiante("Cesar", "Daniel", "Perez Arredondo");
document.body.textContent = saludos(usuarioCompleto);
