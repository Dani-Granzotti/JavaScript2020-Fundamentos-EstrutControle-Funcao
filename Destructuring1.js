const pessoa = {
    nome: 'Ana',
    idade: 30,
    end: {
        logradouro: "Rua abc",
        num: 321,
    }
}

const { nome, idade } = pessoa // retire do objeto pessoa, os atributos nome e idade // cria variáveis
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { end: { logradouro, num, cep } } = pessoa  
console.log(logradouro, num, cep)
