export class Bicicleta {
    Cor: string;
    Marca: string;
    Tamanho: string;
    Rodas: number;

    constructor(
        Cor: string,
        Marca: string,
        Tamanho: string,
        Rodas: number
    ){
        this.Cor = Cor
        this.Marca = Marca
        this.Tamanho = Tamanho
        this.Rodas = Rodas
    }

    confere(){
        console.log(`A marca do bicicleta: ${this.Marca} \nSeu tamanho: ${this.Tamanho} \nSua cor: ${this.Cor} \nContém ${this.Rodas} Rodas`)
    }

    
}   