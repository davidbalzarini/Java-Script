// let n1, n2, resultado

// n1 = prompt("digite um numero")
// n2 = prompt("digite um numero")

// function abacaxi(n1, n2) {
//     resultado = (+n1) + (+n2)
//     return alert (resultado)
// }
// abacaxi(n1, n2)

do{
    opcao = mostrarMenu();
}while(opcao != 2)

function mostrarMenu(){
    entrada = "";
    alert("==-Mostrar o Menu-==" + "\n1- mostrar menu" + "\n2- sair");
    return entrada = prompt();


}