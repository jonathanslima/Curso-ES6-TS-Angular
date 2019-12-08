"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAOConcessionaria_1 = require("./DAOConcessionaria");
var Concessionaria_1 = __importDefault(require("./modules/Concessionaria"));
var DAOPessoa_1 = require("./DAOPessoa");
var Pessoa_1 = __importDefault(require("./modules/Pessoa"));
var DAOVeiculo_1 = require("./DAOVeiculo");
var Veiculos_1 = __importDefault(require("./modules/Veiculos"));
var daoV = new DAOVeiculo_1.DAOVeiculos();
var veiculo = new Veiculos_1.default('');
var daoC = new DAOConcessionaria_1.ConcessionariaDAO();
var concessionaria = new Concessionaria_1.default('', []);
var daoP = new DAOPessoa_1.DAOPessoa();
var pessoa = new Pessoa_1.default('', '', '');
daoC.inserir(concessionaria);
daoP.inserir(pessoa);
daoP.remover(123);
daoV.selecionar(234);
