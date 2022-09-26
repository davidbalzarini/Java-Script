export class Funcionário {
    nome: string;
    idade: number;
    cpf: string;
    telefone: string; 
    salario: number;
    constructor(nome: string, idade: number, cpf: string, telefone: string, salario: number){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.telefone = telefone
        this.salario = salario
    }

    verFuncionario(){
        console.log(`O nome do funcionário é: ${this.nome} \nSua idade é: ${this.idade} \nSeu cpf é: ${this.cpf} \ntelefone ${this.telefone} Rodas \nseu salario: ${this.salario} reais`)
    }
 }
