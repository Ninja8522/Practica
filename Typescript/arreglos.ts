interface Frutas {
    cantidad: number;
    fruta: string;
}

let arrayFrutas: Frutas[] = [
    { cantidad: 5, fruta: 'Manzana'},
    { cantidad: 2, fruta: 'Pera'},
]

for (var i = 0; i<arrayFrutas.length;i++){
    console.log(arrayFrutas[i])
}
