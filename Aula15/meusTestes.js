let carros = ["civic" , "gol" , "fox" , "city", "golf", "onix" , "chevette"]
carros.sort()
let vagas = [1,2,3,4,5,6,7,8,9,10]
console.log(`Em um estacionamento de ${vagas.length} vagas ,os carros estão guardados em ordem alfabetica`)
 for (let pos in carros) {
    console.log(`a vaga ${vagas[pos]} está o ${carros[pos]}`)
 }



