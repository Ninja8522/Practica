var cesar = {
    id: 1,
    nombre: "Cesar",
    correo: "cesar_dany2009@hotmail.com",
    direccion: "Nuevo Horizonte 3677",
    edad: 21
};
console.log(cesar.nombre);
function printObjeto(persona) {
    return 'Hola ' + persona.nombre;
}
document.body.textContent = printObjeto(cesar);
