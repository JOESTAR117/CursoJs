function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "./img/picwish_edited.png";
    document.body.style.background = "  rgb(211, 253, 162)";
  } else if (hora >= 12 && hora <= 18) {
    //boa tarde!
    img.src = "./img/pexels-anderson-martins-2386144_edited.png";
    document.body.style.background = " rgb(170, 117, 65)";
  } else {
    //boa noite
    img.src = "./img/pexels-reynaldo-brigworkz-brigantty-771883_edited.png";
    document.body.style.background = " rgb(45, 0, 75)";
  }
}
