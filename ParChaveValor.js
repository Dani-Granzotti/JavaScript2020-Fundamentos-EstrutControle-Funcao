// par chave/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala blz?' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const Cliente = {
    nome: 'Dani',
    idade: 34,
    peso: 75,
    endereco: {
        logradouro: 'Minha casa',
        numero: 111,
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)