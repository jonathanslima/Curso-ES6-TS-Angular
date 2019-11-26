"use strict";
// let nome: string = "Jonathan";
// let idade: number = 33;
// let homem: boolean = true;
// let interesses: string[] = ["leitura", "desenho", "podcast", "idiomas"];
// let notaInteresses: number[] = [5, 2, 4, 5];
// let arrMixed1: (number | string)[] = [1, 2, 3, "oi"];
// let arrMixed2: [number, number, number, string] = [1, 2, 3, "oi"];
// let obj1: {} = { chave: "valor", key: 2 };
// let obj2: object = { chave: "valor", key: 2 };
var Carro = /** @class */ (function () {
    function Carro(mod, nportas) {
        this.velocidade = 0;
        this.modelo = mod;
        this.numeroDePortas = nportas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(end, listaDeCarros) {
        this.endereco = end;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.montarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carro, carroPreferido) {
        this.nome = nome;
        this.carro = carro;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
;
var carro1 = new Carro('Veloster', 4);
var carro2 = new Carro('Fusca', 2);
var carro3 = new Carro('Doblo', 5);
// let listaDeCarros : Carro[] = [carro1, carro2, carro3];
var listaDeCarros = [carro1, carro2, carro3];
var concessionaria1 = new Concessionaria('Av Rio Branco', listaDeCarros);
var cliente = new Pessoa('Jonathan', '', 'Fusca');
concessionaria1.montarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
