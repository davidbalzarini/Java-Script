let anos, meses, dias, amd 
anos = prompt("quantos anos completos você tem? ")
meses = prompt ("alem dos anos, quantos meses completos? ")
dias = prompt("alem dos meses, quantos dias? ")
amd = 365 * (+anos) + 30 * (+meses) + (+dias)
alert("você tem " + amd + " dias de vida!")
