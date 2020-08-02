const notas = [2.6, 7.6, 3.5, 9.8, 7.4]

for (let i in notas) {
    console.log('Índice:', i, notas[i])
}

const pessoa = {
    nome: 'Dani',
    sobrenome: 'Granzotti',
    idade: 34
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}