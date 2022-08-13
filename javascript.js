let tentativa = document.querySelector(".tentativa")
//let resultado = document.querySelector(".resultado")

let msg = document.querySelector(".mensagem")
var numeros = Math.round(Math.random() * 100)//gera numeros aleatorios até 100

console.log(numeros)
var botao = document.querySelector(".botao")

botao.addEventListener("click", function () {
  if (tentativa.value == numeros) {
    msg.textContent = "parabéns vc acertou o numero é " + numeros
    tentativa.value = ""//limpa
  } else {
    msg.textContent = "você errou tente de novo"
    tentativa.value = "" //limpa
  }
})


