function Carro (velocidadeMaxima = 200, delta = 5) {

    //atributo privado
    let velocidadeAtual = 0

    //atributo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
}
    //atributo público
    this.getvelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(430, 30)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)