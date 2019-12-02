import Veiculos from './Veiculos'

class Carro extends Veiculos {
  private numeroDePortas: number;

  constructor(mod: string, nportas: number) {
		super(mod)
		this.numeroDePortas = nportas;
  }

	public qtdPortas() : string{
		return `Quantidade de Portas: ${this.numeroDePortas}`
	}
};

export default Carro;