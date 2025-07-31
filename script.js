console.log("Meu arquivo js")

const h2 = document.querySelector("h2")

h2.style.color = "Green"
h2.style.fontSize = "32px"

const button = document.querySelector("button")

button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.borderRadius = "15px"
button.style.margin = "0 auto"

const ipt = document.querySelector("#login-usuario")

ipt.classList.add("error")

const paragrafo = document.querySelectorAll("p")

paragrafo[0].classList.add("visible")

ipt.classList.remove("error")

ipt.classList.add("correct")

paragrafo[0].classList.remove("visible")

const ipt2 = document.querySelector("#login-senha")

ipt2.classList.add("error")

asdfasjkdhdajkshdajkshdasdlkaslkdjaskld