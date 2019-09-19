var superman = {
    nombre: 'Superman',
    poder: 'Super fuerza'
};
var ironman = {
    nombre: 'Iron-Man',
    arma: 'Mark-39'
};
var thor = {
    nombre: 'Thor',
    poder: 'Rayos',
    arma: 'Martillo'
};
function getHeroe(heroe) {
    var mensaje;
    if (heroe.poder && heroe.arma) {
        return mensaje = heroe.nombre + " tiene el poder de:  " + heroe.poder + " y su arma es: " + heroe.arma;
    }
    else if (heroe.arma) {
        return mensaje = heroe.nombre + " tiene un arma que es: " + heroe.arma;
    }
    else if (heroe.poder) {
        return mensaje = heroe.nombre + " tiene el poder de: " + heroe.poder;
    }
}
document.body.textContent = getHeroe(thor);
