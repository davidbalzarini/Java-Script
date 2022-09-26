let mes
mes = prompt("digite um numero que corresponda a um mês: ")
meses(mes)

function meses(mes){
    if(mes == 1){
        return alert("esse numero corresponde ao mês de janeiro")
    }
    else if(mes == 2){
        return alert("esse numero corresponde ao mês de fevereiro")
    }
    else if(mes == 3){
        return alert("esse numero corresponde ao mês de março")
    }
    else if(mes == 4){
        return alert("esse numero corresponde ao mês de abril")
    }
    else if(mes == 5){
        return alert("esse numero corresponde ao mês de maio")
    }
    else if(mes == 6){
        return alert("esse numero corresponde ao mês de junho")
    }
    else if(mes == 7){
        return alert("esse numero corresponde ao mês de julho")
    }
    else if(mes == 8){
        return alert("esse numero corresponde ao mês de agosto")
    }
    else if(mes == 9){
        return alert("esse numero corresponde ao mês de setembro")
    }
    else if(mes == 10){
        return alert("esse numero corresponde ao mês de outubro")
    }
    else if(mes == 11){
        return alert("esse numero corresponde ao mês de novembro")
    }
    else if(mes == 12){
        return alert("esse numero corresponde ao mês de dezembro")
    }
    else{
        return alert("esse numero não corresponde a mês nenhum")
    }
}