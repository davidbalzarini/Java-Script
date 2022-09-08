let nome, peso, altura, dataInternacao, diabetes
nome = prompt("digite seu nome: ");
peso = prompt("digite seu peso: ");
altura = prompt("digite sua altura: ");
dataInternacao = prompt("digite a data de internação: ");
diabetes = prompt("você tem diabetes? sim ou não?");
if (diabetes == "sim") {
    alert("Paciente: " + nome + "    Peso: " + peso + "\nAltura: " + altura + "   Data de internação: " + dataInternacao + "   Diabetes: Positivo");
}
else{
    alert("Paciente: " + nome + "    Peso: " + peso + "\nAltura: " + altura + "   Data de internação: " + dataInternacao + "   Diabetes: Negativo");
    
}
