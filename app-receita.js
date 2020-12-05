let rodape = document.getElementById('rodape')

rodape.style.textAlign = "center"
rodape.style.marginBottom = "20px"
rodape.style.color = "black"
rodape.style.fontFamily = "monospace"
rodape.style.fontSize = "1vw"

let rodapeText = document.getElementsByClassName('rodapeText')

rodapeText.item(0).innerHTML = "Criado por Jenivaldo Lisboa"
rodapeText.item(1).innerHTML = "Acessado em: " + Date()