function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[Erro] Verifique novamente os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - +(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute("id","foto")
        if (fsex[0].checked) {
          genero = "homem"  
          if (idade >= 0 && idade < 8) {
            // criança
            img.setAttribute('src', 'pexels-rulo-davila-4678308.jpg')
         } else if (idade < 18) {
            //adolecente
            img.setAttribute('src', 'pexels-jc-laurio-1618592.jpg')
         } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'pexels-creation-hill-1681010.jpg')
         } else {
            img.setAttribute('src', 'pexels-thgusstavo-santana-1933873.jpg')
         }
        } else {
        genero ="mulher"  
        if (idade >= 0 && idade < 10) {
            // criança
            img.setAttribute('src', 'pexels-tuan-pm-11293831.jpg')
         } else if (idade < 18) {
            //adolecente
            img.setAttribute('src', 'pexels-janko-ferlic-1493111 (1).jpg')
         } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'pexels-miguel-arcanjo-saddi-1213769.jpg')
         } else {
            img.setAttribute('src', 'pexels-edu-carvalho-2050994.jpg')
         } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.height = '300px';
    }
}
    