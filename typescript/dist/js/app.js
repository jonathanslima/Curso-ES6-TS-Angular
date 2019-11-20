"use strict";
var ola = function (nome) {
    console.log("Ol\u00E1 " + nome + "!");
};
ola("Alice de Oliveira Lima!");
var nome = "Jonathan";
var idade = 33;
var homem = true;
var interesses = ["leitura", "desenho", "podcast", "idiomas"];
var notaInteresses = [5, 2, 4, 5];
var arrMixed1 = [1, 2, 3, "oi"];
var arrMixed2 = [1, 2, 3, "oi"];
var obj1 = { chave: "valor", key: 2 };
var obj2 = { chave: "valor", key: 2 };
var greeter = function (person) {
    console.log(person.nome + " tem " + person.idade + " anos!");
};
var jon = { nome: "Jonathan", idade: 33 };
var alice = { nome: "Alice", idade: 4 };
var davi = { nome: "Davi", idade: 6 };
greeter(jon);
greeter(alice);
greeter(davi);
var Carro = /** @class */ (function () {
    function Carro(Model, NPortas, Vel) {
        this.modelo = Model;
        this.numeroDePortas = NPortas;
        this.velocidade = Vel;
    }
    Carro.prototype.acelerar = function (v) {
        if (v === void 0) { v = 0; }
        return console.log(this.velocidade !== 0);
    };
    Carro.prototype.parar = function (v) {
        if (v === void 0) { v = 0; }
        return console.log(this.velocidade === 0);
    };
    Carro.prototype.velocidadeAtual = function (v) {
        if (v === void 0) { v = 0; }
        return console.log(this.velocidade);
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(end, lista) {
        this.endereco = end;
        this.listaDeCarros = lista;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return console.log(this.endereco);
    };
    Concessionaria.prototype.montarListaDeCarros = function () {
        return console.log(this.listaDeCarros);
    };
    return Concessionaria;
}());
;
var Pessoa = /** @class */ (function () {
    function Pessoa(n, c, cp) {
        this.nome = n;
        this.carro = c;
        this.carroPreferido = cp;
    }
    Pessoa.prototype.dizerNome = function (name) {
        if (name === void 0) { name = 'Usuário não identificado'; }
        return console.log(this.nome);
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return console.log(this.carroPreferido);
    };
    Pessoa.prototype.comprarCarro = function () {
        return console.log(this.carro);
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
    };
    return Pessoa;
}());
;
