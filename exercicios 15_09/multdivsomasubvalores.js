let x, y, soma, sub, div, mult
x = prompt("digite um numero: ")
y = prompt("digite outro numero: ")
tudo(x, y)

function tudo(x, y){
    mult = x * y
    div = x / y
    soma = (+x) + (+y)
    sub = x - y
    return alert("soma: " + soma + "\nsubtração: " + sub + "\ndivisão: " + div + "\nmultiplicação: " + mult)




}