function getHeroe(nombre, poder, arma) {
    if (arma === void 0) { arma = 'Martillo'; }
    var mensaje;
    if (poder) {
        return mensaje = nombre + " tiene el poder de:  " + poder + " y su arma es: " + arma;
    }
    else {
        return mensaje = nombre + " tiene un arma que es: " + arma;
    }
}
document.body.textContent = getHeroe('Thor', 'Rayo');
