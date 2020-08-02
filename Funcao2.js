//Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => 
{
    return a + b
}

console.log(soma(2, 3))

//retorno implícito com arrow function
const subtracao = (a, b) => a - b //uma função sem as chaves, sem corpo, significa que tenho uma função com uma única sentença de cod
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!")