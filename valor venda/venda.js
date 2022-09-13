//Faça um Algoritmo que receba o preço de custo de um produto e mostre o valor da venda. 
//sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado
//pelo usuário 


let custo, venda, acrescimo, acrescimoP
custo = prompt("Qual o custo do produto? ");
acrescimo = prompt("qual porcentagem deseja fazer em cima do custo? ");
acrescimoP = acrescimo / 100;
venda = (+custo)+ (+acrescimoP) *  (+custo);
alert("o valor final do produto é " + venda);
