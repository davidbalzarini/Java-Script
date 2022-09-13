let s, n, e, total, ev
n = prompt("digite o numero de horas trabalhadas.")
if (n > 50) {
    s = 50 * 10
    e = (+n) - 50
    ev = e * 20
    total = (+ev) + (+s)
    alert("o salario total é " + total + "\nvalor de hora extra: " + ev)
} else {
    s = (+n) * 10
    total = (+s)
    alert("o salario total é " + total + "\nvalor de hora extra: 0")
}