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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./modules/Carro"));
var Concessionaria_1 = __importDefault(require("./modules/Concessionaria"));
var Pessoa_1 = __importDefault(require("./modules/Pessoa"));
var carro1 = new Carro_1.default('Veloster', 4);
var carro2 = new Carro_1.default('Fusca', 2);
var carro3 = new Carro_1.default('Doblo', 5);
// let listaDeCarros : Carro[] = [carro1, carro2, carro3];
var listaDeCarros = [carro1, carro2, carro3];
var concessionaria1 = new Concessionaria_1.default('Av Rio Branco', listaDeCarros);
var cliente = new Pessoa_1.default('Jonathan', '', 'Fusca');
concessionaria1.montarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
