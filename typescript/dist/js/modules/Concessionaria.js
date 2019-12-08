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
    Concessionaria.prototype.HorarioAtendimento = function () {
        return 'Atendimento das 08:00 as 17:00';
    };
    return Concessionaria;
}());
;
exports.default = Concessionaria;
