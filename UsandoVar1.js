{
    {
        {
            {
                var sera = 'Será!!!' //variavel var estará visivel dentro e fora do bloco (escopo)
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste()
{
    var local = 123
    console.log(local)
}

teste()
// console.log(local) essa chamada não funciona pq a var só está visível dentro da função