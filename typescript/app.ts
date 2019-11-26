// let nome: string = "Jonathan";
// let idade: number = 33;
// let homem: boolean = true;
// let interesses: string[] = ["leitura", "desenho", "podcast", "idiomas"];
// let notaInteresses: number[] = [5, 2, 4, 5];
// let arrMixed1: (number | string)[] = [1, 2, 3, "oi"];
// let arrMixed2: [number, number, number, string] = [1, 2, 3, "oi"];
// let obj1: {} = { chave: "valor", key: 2 };
// let obj2: object = { chave: "valor", key: 2 };

class Carro {
  private modelo: string;
  private numeroDePortas: number;
  private velocidade: number = 0;

  constructor(mod: string, nportas: number) {
    this.modelo = mod;
    this.numeroDePortas = nportas;
  }

  public acelerar(): void {
    this.velocidade += 10;
  }

  public parar(): void {
    this.velocidade = 0;
  }

  public velocidadeAtual(): number {
    return this.velocidade;
  }
};

class Concessionaria {
  private endereco: string;
  private listaDeCarros: any;

  constructor(end: string, listaDeCarros: Array<Carro>) {
    this.endereco = end;
    this.listaDeCarros = listaDeCarros;
  }

  fornecerEndereco(): string {
    return this.endereco;
  }

  montarListaDeCarros(): any {
    return this.listaDeCarros;
  }
};

class Pessoa {
  private nome: string;
  private carro: Carro;
  private carroPreferido: string;

  constructor(nome: string, carro: any, carroPreferido: string) {
    this.nome = nome;
    this.carro = carro;
    this.carroPreferido = carroPreferido;
  }

  public dizerNome() : string {
    return this.nome;
  }

  public dizerCarroPreferido() : string{
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro) : void{
    this.carro = carro;
  }

  public dizerCarroQueTem() : Carro{
    return this.carro;
  }
};

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