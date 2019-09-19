function saludo(persona, edad, deporte){
    const cadena: any = 'Hola, '+persona+' tu tienes '+edad+' años de edad. '
    + '¿Practicas algun deporte? '+deporte;
    return cadena;
}

let persona: string = 'Cesar';
let edad: number = 21;
let deporte: boolean = true;

document.body.textContent = saludo(persona, edad, deporte);