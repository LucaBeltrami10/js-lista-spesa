const listaSpesa = ['latte', 'uova', 'farina', 'cetrioli', 'burro', 'scottex']

const numeroElementiLista = listaSpesa.length

/* for (let i = 0; i < numeroElementiLista; i++){
    console.log(listaSpesa[i])
} */

let elementoDaStampare = 0

while (elementoDaStampare < listaSpesa.length){
    console.log(listaSpesa[elementoDaStampare])
    elementoDaStampare += 1
}