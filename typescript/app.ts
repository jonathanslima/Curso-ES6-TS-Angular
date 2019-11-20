let ola = (nome: string) => {
  console.log(`Olá ${nome}!`);
};

ola("Alice de Oliveira Lima!");

let nome: string = "Jonathan";
let idade: number = 33;
let homem: boolean = true;
let interesses: string[] = ["leitura", "desenho", "podcast", "idiomas"];
let notaInteresses: number[] = [5, 2, 4, 5];
let arrMixed1: (number | string)[] = [1, 2, 3, "oi"];
let arrMixed2: [number, number, number, string] = [1, 2, 3, "oi"];
let obj1: {} = { chave: "valor", key: 2 };
let obj2: object = { chave: "valor", key: 2 };

interface Person {
  nome: string;
  idade: number;
}

const greeter = (person: Person) => {
  console.log(`${person.nome} tem ${person.idade} anos!`);
};
let jon = { nome: "Jonathan", idade: 33 };
let alice = { nome: "Alice", idade: 4 };
let davi = { nome: "Davi", idade: 6 };

greeter(jon);
greeter(alice);
greeter(davi);

class Carro {
  modelo: string;
  numeroDePortas: number;
  velocidade: number;

  constructor(Model: string, NPortas: number, Vel: number) {
    this.modelo = Model;
    this.numeroDePortas = NPortas;
    this.velocidade = Vel;
  }

  acelerar(v: number = 0) {
    return console.log(this.velocidade !== 0);
  }
  parar(v: number = 0) {
    return console.log(this.velocidade === 0);
  }
  velocidadeAtual(v: number = 0) {
    return console.log(this.velocidade);
  }
}

class Concessionaria {
  endereco: string;
  listaDeCarros: string[];

  constructor(end: string, lista: string[]) {
    this.endereco = end;
    this.listaDeCarros = lista;
  }

  fornecerEndereco() {
    return console.log(this.endereco);
  }

  montarListaDeCarros() {
    return console.log(this.listaDeCarros);
  }
};

class Pessoa {
  nome: string;
  carro: string;
  carroPreferido: string;

  constructor(n: string, c: string, cp: string){
    this.nome = n;
    this.carro = c;
    this.carroPreferido = cp;
  }

  dizerNome(name: string = 'Usuário não identificado'){
    return console.log(this.nome);
  }

  dizerCarroPreferido(){
    return console.log(this.carroPreferido)
  }

  comprarCarro(){
    return console.log(this.carro);
  }

  dizerCarroQueTem(){

  }
};
