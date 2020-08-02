let valor //declarada mas não inicializada
console.log(valor)

valor = null //ausência de valor, inicializada sem valor, aponta para um end de memória
console.log(valor)
// console.log(valor.toString()) // erro! não consigo chamar nada se o que vem antes está nulo ou indefinido

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined 
console.log(!!produto.preco)
console.log(produto)

// delete produto.preço é uma opção para retirar o valor do objeto

produto.preco = null //sem preço, preço não definido
console.log(!!produto.preco)
console.log(produto)

