let taxaImposto, custo, custoFinal
taxaImposto = prompt("Insira a porcentagem de imposto: ")
custo = prompt("Insira o custo inicial: ")

somaImposto(taxaImposto, custo)

function somaImposto(taxaImposto, custo){

    custoFinal = (taxaImposto/100)*custo + (+custo)
    return alert("O custo final é: " + custoFinal)


}