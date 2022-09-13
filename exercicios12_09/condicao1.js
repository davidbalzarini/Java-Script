let p, e, m
p = prompt("digite o peso")
if (p > 50) {
    e = (+p) - 50
    m = e * 4
    alert("o peso atual é " + p + " KG, o valor da multa será " + m + "reais")
    
} else {
    alert("o peso atual é " + p + " KG, o peso está dentro do permitido. não existe excesso.")
}
