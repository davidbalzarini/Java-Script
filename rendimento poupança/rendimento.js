//faça um algoritmo que receba um valor que foi depositado e exiba o valor com 
//rendimento após um mês. considere fixo o juro da poupança em 0,70% a.m

let deposito, rendimento, rendimentoReal, tempo, valorFinal
deposito = prompt("valor depositado: ");
rendimento = prompt("rendimento ao mês: ");
tempo = prompt("quantos meses pretende deixar seu dinheiro na poupança? ");
rendimentoReal = deposito * tempo * rendimento / 100;
valorFinal = (+deposito) + (+rendimentoReal); 
alert("o montante final será " + valorFinal);