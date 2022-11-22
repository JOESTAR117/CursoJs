let valores = [8,1,4,5,6,8]
valores.push(9)
valores.sort()

/*for (let pos = 0;pos < valores.length;++pos) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
console.log(`o primeiro numero no vetor e ${valores[0]}`)*/
for (let pos in valores) {
    console.log(valores[pos])
} 
