const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }
    else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Oi') // CUIDADO! em JS não retorna erro, deixa passar qlqr tipo de dado e compara...