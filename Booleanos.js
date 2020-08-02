let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os Verdadeiros...')
console.log(!!1)
console.log(!!3)
console.log(!!-1) //todo num inteiro com excessão do zero, é verdadeiro em js
console.log(!!' ') //tem um espaço
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 1))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'') //string vazia, não tem nada e nenhum espaço
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!("" || null || 0 || ' '))

let nome = ''
console.log(nome || "Desconhecido")

nome = "Lucas"
console.log(nome || "Desconhecido")