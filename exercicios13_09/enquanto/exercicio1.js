let x, y, z, soma, media
x = prompt("digite um numero")
y = prompt("digite um numero")
z = prompt("digite um numero")
while (x >= 0 && y >= 0 && z >= 0) {
    soma = (+x) + (+y) + (+z)
    media = ((+x) + (+y) + (+z)) / 3
    alert("soma: " + soma + "\nmedia: " + media)
    break
}