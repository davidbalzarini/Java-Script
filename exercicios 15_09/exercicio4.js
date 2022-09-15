let peso, altura, iMc
peso = prompt("Qual seu peso? ")
altura = prompt("qual a sua altura? ")
imc (peso, altura)
function imc (peso, altura){
    iMc = peso / (altura*altura)
    return alert("seu IMC atual é" + iMc)

}