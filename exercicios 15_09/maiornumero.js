let n1, n2, n3, maior, menor;

n1 = prompt("Insira o primeiro valor");
n2 = prompt("Insira o segundo valor");
n3 = prompt("Insira o terceiro valor");

maior = maiorn();
menor = menorn();

function maiorn(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return alert(n1 + " é o maior valor entre os números")
    }else if(n2>n1 && n2>n3){
        return alert(n2+" é o maior valor entre os números")
    }else if(n3>n1 && n3>n2){
        return alert(n3+" é o maior valor entre os números")
    }
}

function menorn(n1,n2,n3){
    if(n1<n2 && n1<n3){
        return alert(n1+" é menor valor entre os números")
    }else if(n2<n1 && n2 < n3){
        return alert(n2+" é menor valor entre os números")
    }else if(n3<n1 && n3 < n2){
        return alert(n3+" é menor valor entre os números")
    }
}

maiorn(n1, n2, n3)
menorn(n1, n2, n3)
