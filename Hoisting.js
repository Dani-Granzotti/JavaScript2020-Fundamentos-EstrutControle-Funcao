console.log(a)
var a = 2
console.log("a =", a)

function teste() {
    console.log(a)
    var a = 2
    console.log("a =", a)
}
teste()
console.log('a =', a)

//ocorre o efeito de içamento com var

console.log(b)
let b = 3
console.log(b)
