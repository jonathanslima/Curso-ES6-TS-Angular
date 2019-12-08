import Veiculos from './Veiculos'

class Carro extends Veiculos {
  private numeroDePortas: number;

  constructor(modelo: string, numeroDePortas: number) {
		super(modelo)
		this.modelo = modelo;
		this.numeroDePortas = numeroDePortas;
  }

	public qtdPortas() : string{
		return `Quantidade de Portas: ${this.numeroDePortas}`
	}
};

export default Carro;