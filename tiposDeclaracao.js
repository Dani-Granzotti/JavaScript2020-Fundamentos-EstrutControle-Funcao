console.log(soma(6, 7))

// function declaration - qd declarada dessa forma é lida com prioridade pelo js, 
// carregador carrega todas as funções primeiro, qd assim declarada é reconhecida
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression - pouco usada
const mult = function mult (x, y) {
    return x * y
}