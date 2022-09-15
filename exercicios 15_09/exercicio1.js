let n1, n2, porcent

n1 = prompt("qual numero quer saber a porcentagem")
n2 = prompt("qual porcentagem")
porcentagem(n1, n2)
function porcentagem(n1, n2) {
   porcent = n1 * (n2/100)
   return  alert("a porcentagem é " + porcent)
}