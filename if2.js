function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('final')
}

// como não há um par de chaves indicando o bloco do if, fica subentendido que somente a primeira sentença faz
// parte do bloco if e a segunda sentença está fora do bloco, estando dentro do bloco da funnção

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { //cuidado com ; não utilizar para estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)

// nesse caso, foram impressos os dois valores de teste2 pq o ; é a sentença do if e o bloco subsequente está num outro bloco
