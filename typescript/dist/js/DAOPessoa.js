"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./modules/Pessoa"));
var DAOPessoa = /** @class */ (function () {
    function DAOPessoa() {
        this.nomeTabela = 'tb_pessoa';
    }
    DAOPessoa.prototype.inserir = function (Pessoa) {
        console.log('Pessoa inserida!');
        return true;
    };
    DAOPessoa.prototype.atualizar = function (Pessoa) {
        console.log('Pessoa atualizada!');
        return true;
    };
    DAOPessoa.prototype.remover = function (id) {
        console.log('Pessoa removida!');
        return new Pessoa_1.default('', '', '');
    };
    DAOPessoa.prototype.selecionar = function (id) {
        console.log('Pessoa selecionada!');
        return new Pessoa_1.default('', '', '');
    };
    DAOPessoa.prototype.selecionarTodos = function () {
        console.log('Pessoas selecionadas!');
        return [new Pessoa_1.default('', '', '')];
    };
    return DAOPessoa;
}());
exports.DAOPessoa = DAOPessoa;
