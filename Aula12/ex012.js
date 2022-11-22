var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas.`)

if (hora > 5 && hora < 12) {
    console.log('bom dia')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde')
} else if (hora >24 || hora < 5) {
    console.log('Boa madrugada')
} else {
    console.log('Boa noite')
}