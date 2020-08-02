const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break  //qd encontra o índice 5, ele pula para fora do bloco for 
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue  // qd encontra o índice 5, pula o índice e continua do próximo
    }
    console.log(`${y} = ${nums[y]}`) 
}