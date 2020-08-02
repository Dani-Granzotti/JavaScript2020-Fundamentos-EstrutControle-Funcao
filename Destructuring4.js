function rand([min = 0, max = 1000]) { //desestruturou o array
    if (min > max) [min, max] = [max, min] // criou um novo array a partir dos atributos desestruturados
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))