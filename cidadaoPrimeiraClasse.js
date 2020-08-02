//Função em JS é First Class Object (Citizens)
//Higher-Order Function

//criar de forma literal
function fun1() { }

//armazenar dentro de uma variável
const fun2 = function() { }

//armazenar uma função dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Olá'}
console.log(obj.falar())

//passar função como parâmetro
function run (fun) {
    fun ()
}

//uma função pode retornar/conter outra função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma (4, 5) (1)
//outra forma de chamar a função:
const total = soma (4, 5)
total (1)