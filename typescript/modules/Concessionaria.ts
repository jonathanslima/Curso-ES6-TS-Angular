import {ConcessionariaInterface} from '../interfaces/ConcessionariaInterface'
import Carro from './Carro';

class Concessionaria implements ConcessionariaInterface {
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

  HorarioAtendimento(): string{
    return 'Atendimento das 08:00 as 17:00'
  }
};

export default Concessionaria;