//Faça um algoritmo que efetua a apresentação do valor da conversão em real (R$) de um valor 
//lido em dólar (US$). o algoritmo deverá solicitar o valor da cotação do dólar.


let real, dolar, cotacaoDolar
dolar = prompt("quantos dólares você quer converter para real? ");
cotacaoDolar = prompt("qual a cotação atual do dólar? ");
real = (+dolar) * (+cotacaoDolar);
if (real == 1) {
    alert(dolar + " dolares equivale a " + real + " real" );
} else {
    alert(dolar + " dolares equivale a " + real + " reais" );
}
