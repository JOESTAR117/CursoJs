let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor do valor e ${num[0]}`)
let pos = num.indexOf(7)
if (pos === -1) {
    console.log('Esse numero nao existe')
} else {
console.log(`o valor 8 esta na posição ${pos}`)
}