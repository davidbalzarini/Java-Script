let hora, minuto
hora = prompt("digite a hora: ")
minuto = prompt("digite os minutos")
horaconvertida(hora, minuto)


function horaconvertida(hora, minuto){
    if(hora == 00){
        return alert("12:" + minuto + " AM")
    }
    else if(hora == 12){
        return alert("12:" + minuto + " PM")
    }
    else if(hora == 13){
        return alert("1:" + minuto + " PM")
    }
    else if(hora == 14){
        return alert("2:" + minuto + " PM")
    }
    else if(hora == 15){
        return alert("3:" + minuto + " PM")
    }
    else if(hora == 16){
        return alert("4:" + minuto + " PM")
    }
    else if(hora == 17){
        return alert("5:" + minuto + " PM")
    }
    else if(hora == 18){
        return alert("6:" + minuto + " PM")
    }
    else if(hora == 19){
        return alert("7:" + minuto + " PM")
    }
    else if(hora == 20){
        return alert("8:" + minuto + " PM")
    }
    else if(hora == 21){
        return alert("9:" + minuto + " PM")
    }
    else if(hora == 22){
        return alert("10:" + minuto + " PM")
    }
    else if(hora == 23){
        return alert("11:" + minuto + " PM")
    }
    else{
        return alert(hora + ":" + minuto + " AM")
    }



}