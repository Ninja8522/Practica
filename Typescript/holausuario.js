function saludo(persona, edad, deporte) {
    var cadena = 'Hola, ' + persona + ' tu tienes ' + edad + ' años de edad. '
        + '¿Practicas algun deporte? ' + deporte;
    return cadena;
}
var persona = 'Cesar';
var edad = 21;
var deporte = true;
document.body.textContent = saludo(persona, edad, deporte);
