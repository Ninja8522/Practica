function saludo(persona) {
    return "Hola, " + persona.primerNombre + ' ' + persona.segundoNombre;
}
var llamarUsuario = { primerNombre: "Cesar", segundoNombre: "Daniel" };
var segundoUsuario = { primerNombre: "Jose", segundoNombre: "Ramon" };
document.body.textContent = saludo(segundoUsuario);
