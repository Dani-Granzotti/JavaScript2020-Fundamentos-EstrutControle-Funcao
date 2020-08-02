const notas =[3.6, 4.2, 9.0, 10, 4.6, 5.5]

//sem callback
const notasbaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

//com callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasbaixas2)

//ou ainda:
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)