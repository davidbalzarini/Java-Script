let deposito, rendimento, rendimentoReal, tempo, valorFinal
deposito = prompt("valor depositado: ")
rendimento = prompt("rendimento ao mês: ")
tempo = prompt("quantos meses pretende deixar seu dinheiro na poupança? ")
rendimentoReal = deposito * tempo * rendimento / 100
valorFinal = (+deposito) + (+rendimentoReal) 
alert("o montante final será " + valorFinal)

