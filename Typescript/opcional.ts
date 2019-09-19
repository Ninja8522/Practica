function getHeroe( nombre: string, poder?: string, arma: string = 'Martillo'){
    let mensaje:string;
    
    if (poder){
        return mensaje = `${ nombre } tiene el poder de:  ${poder} y su arma es: ${ arma}`
    } else {
        return mensaje = `${ nombre } tiene un arma que es: ${ arma}`
    }

}

document.body.textContent = getHeroe('Thor','Rayo');