"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Concessionaria;
