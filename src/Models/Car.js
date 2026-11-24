export class Car {
    nome;
    concessionaria;
    tipo;
    chassi;
    eficiencia;
    tracao;
    transmissao;
    motor;
    combustivel;


    constructor(nome, concessionaria, tipo, chassi, eficiencia, tracao, transmissao, motor, combustivel) {
        this.nome = nome;
        this.concessionaria = concessionaria;
        this.tipo = tipo;
        this.chassi = chassi;
        this.eficiencia = eficiencia;
        this.tracao = tracao;
        this.transmissao = transmissao;
        this.motor = motor;
        this.combustivel = combustivel;
    }
}
