let nome, idaeeeee, gmusical, filmefavorito, filhos, sonho
nome = prompt("Escreva seu nome: ");
idaeeeee = prompt("Qual sua idade? ");
gmusical = prompt("gosto musical: ");
filmefavorito = prompt("qual seu filme favorito? ");
filhos = prompt("quantos filhos você tem? ");
sonho = prompt("qual seu sonho? ");
alert("seu nome é " + nome);
alert("sua idade é: " + idaeeeee);
alert("seu gosto musical é " + gmusical);
alert("filme favorito: " + filmefavorito);
if (filhos == 0) {
    alert("você não tem filhos");
}
else{
    alert("você tem " + filhos + " filhos");
}
alert("seu maior sonho é: " + sonho);