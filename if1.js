function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.4)
soBoaNoticia(6)

function seForVerdade(valor){
    if(valor){
        console.log('É Verdade ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade({})
seForVerdade([1,2])