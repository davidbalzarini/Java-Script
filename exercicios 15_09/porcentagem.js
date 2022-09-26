let x, porcent, numeroFinal
x = prompt("digite um numero: ")
porcent = prompt("digite a porcentagem que quer aplicar: ")
porcentagem(numeroFinal, x, porcent)

function porcentagem(numeroFinal, x, porcent){
    numeroFinal = x * (porcent/100)
    return alert("resultado: " + numeroFinal)
}

