var custo, venda, acrescimo, acrescimoP
custo = prompt("Qual o custo do produto? ")
acrescimo = prompt("qual porcentagem deseja fazer em cima do custo? ")
acrescimoP = acrescimo / 100
venda = (+custo)+ (+acrescimoP) 
alert("o valor final do produto é " + venda)
