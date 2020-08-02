console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' é uma função equivalente à anterior
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //this. sinaliza que o atributo é publico, ou seja pode ser utilizado fora da função
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()