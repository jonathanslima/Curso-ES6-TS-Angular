"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos_1 = __importDefault(require("./modules/Veiculos"));
var DAOVeiculos = /** @class */ (function () {
    function DAOVeiculos() {
        this.nomeTabela = 'tb_veiculos';
    }
    DAOVeiculos.prototype.inserir = function (Veiculos) {
        console.log('Veiculo inserido!');
        return true;
    };
    DAOVeiculos.prototype.atualizar = function (Veiculos) {
        console.log('Veiculo atualizado!');
        return true;
    };
    DAOVeiculos.prototype.remover = function (id) {
        console.log('Veiculo removido!');
        return new Veiculos_1.default('');
    };
    DAOVeiculos.prototype.selecionar = function (id) {
        console.log('Veiculo selecionado!');
        return new Veiculos_1.default('');
    };
    DAOVeiculos.prototype.selecionarTodos = function () {
        console.log('Veiculos selecionados!');
        return [new Veiculos_1.default('')];
    };
    return DAOVeiculos;
}());
exports.DAOVeiculos = DAOVeiculos;
