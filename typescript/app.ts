// let nome: string = "Jonathan";
// let idade: number = 33;
// let homem: boolean = true;
// let interesses: string[] = ["leitura", "desenho", "podcast", "idiomas"];
// let notaInteresses: number[] = [5, 2, 4, 5];
// let arrMixed1: (number | string)[] = [1, 2, 3, "oi"];
// let arrMixed2: [number, number, number, string] = [1, 2, 3, "oi"];
// let obj1: {} = { chave: "valor", key: 2 };
// let obj2: object = { chave: "valor", key: 2 };

import Carro from './modules/Carro';
import Concessionaria from './modules/Concessionaria';
import Pessoa from './modules/Pessoa'

let carro1 = new Carro('Veloster', 4);
let carro2 = new Carro('Fusca', 2);
let carro3 = new Carro('Doblo', 5);

// let listaDeCarros : Carro[] = [carro1, carro2, carro3];
let listaDeCarros : Array<Carro> = [carro1, carro2, carro3];
let concessionaria1 = new Concessionaria('Av Rio Branco', listaDeCarros);
let cliente = new Pessoa('Jonathan', '', 'Fusca');

concessionaria1.montarListaDeCarros().map((carro: Carro)=> {
  if(carro['modelo'] === cliente.dizerCarroPreferido()){
    cliente.comprarCarro(carro);
  }
})

console.log(cliente.dizerCarroQueTem());
console.log(concessionaria1.HorarioAtendimento());