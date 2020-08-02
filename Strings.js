const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna um caracter dentro de uma string
console.log(escola.charAt(5)) //não retorna erro, só retorna "vazio"

console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1)) // vai do índice 1, incluindo ele mesmo, até o final
console.log(escola.substring(0, 3)) // vai do índice 0, incluindo ele mesmo, até o 3 sem considerar ele mesmo

console.log("escola ".concat(escola).concat("!"))
console.log("escola " + escola + "!")
console.log(escola.replace(3, "e")) // substitui o caracter 3 pela letra e

console.log("Ana,João,Maria,Pedro".split(",")) // gera um array a partir de uma string