//*A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
//indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
//varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
//suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
//intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
//notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
//medido e emita a notificação adequada aos diferentes grupos de empresas.

let i
i = prompt("qual o indice de poluição atual? ")
if (i >= 0.05 && i <= 0.25) {
    alert("o nivel de poluição está aceitavel")
}
else if (i >= 0.3 && i < 0.4) {
    alert("o nivel de poluição aumentou. Grupo 1, suspendam suas atividades")
}
else if (i >= 0.4 && i < 0.5) {
    alert("o nivel de poluição está. Grupo 1 e Grupo 2, suspendam suas atividades imediatamente")
}
else if (i >= 0.5) {
    alert("o nivel de poluição aumentou. Grupo 1, Grupo 2 e Grupo 3 suspendam suas atividades imediatamente")
}