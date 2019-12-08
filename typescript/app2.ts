import {ConcessionariaDAO} from "./DAOConcessionaria";
import Concessionaria from "./modules/Concessionaria";

import {DAOPessoa} from './DAOPessoa';
import Pessoa from './modules/Pessoa';

import {DAOVeiculos} from './DAOVeiculo';
import Veiculo from './modules/Veiculos';

let daoV: DAOVeiculos = new DAOVeiculos();
let veiculo: Veiculo = new Veiculo('');

let daoC: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria: Concessionaria = new Concessionaria('', []);

let daoP: DAOPessoa = new DAOPessoa();
let pessoa: Pessoa = new Pessoa('', '', '');

daoC.inserir(concessionaria)
daoP.inserir(pessoa);
daoP.remover(123);
daoV.selecionar(234);
