let b, a, area
a = prompt("digite o valor da altura do triangulo: ")
b = prompt("digite o valor da base do triangulo: ")
if (a >= 0 && b >= 0) {
    area = b * a / 2
    alert("a área do triangulo é " + area)
}
else{
    alert("os valores não são validos, insira valores validos e tente novamente")
}