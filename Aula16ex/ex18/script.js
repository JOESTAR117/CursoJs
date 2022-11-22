let num = document.getElementById('fnum')
let list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
}
}
function inlista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (eNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML =""
    } else {
        alert('[ERRO] Número invalido ou ja inserido!!')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0) {
        alert('Nenhum número foi adicionado')
    } else {
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
        }
        let tot = valores.length 
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor número foi ${menor}</p>`
        res.innerHTML += `<p>O maior número foi ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os números e ${soma}</p>`
        res.innerHTML += `<p> A media e ${media}`
    }
}