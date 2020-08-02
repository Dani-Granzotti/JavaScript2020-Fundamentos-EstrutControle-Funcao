const [a] = [10] // array = colchete do lado direito da operação, desestruturação é o colchete do lado esq da op
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 9], [0, 9, 2]]
console.log(nota)