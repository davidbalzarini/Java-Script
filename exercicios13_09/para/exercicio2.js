let i, soma
for(i = 1; i <= 500; i = i + 2){
    if (i % 3 == 0 && i % 2 != 0) {
        soma = i++
        alert("\n"+ soma)
    }
}