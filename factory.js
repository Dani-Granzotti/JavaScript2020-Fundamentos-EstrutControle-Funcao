// factory simples
function pessoa () {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(pessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2.000))

