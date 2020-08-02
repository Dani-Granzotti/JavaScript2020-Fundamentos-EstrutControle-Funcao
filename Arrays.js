const valores = [7.7, 8.2, 9.5, 4.7]
console.log(valores[0], valores[3])
console.log(valores[4]) // não da erro, mostra que o valor é indefinido visto que o vetor não tem um tamanho definido

valores[4] = 5.8
console.log(valores[4])

console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(typeof valores)