import Carro from './Carro';

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

export default Concessionaria;