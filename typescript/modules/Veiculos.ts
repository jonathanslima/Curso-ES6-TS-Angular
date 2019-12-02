class Veiculo {
  private modelo: string;
  private velocidade: number = 0;

  constructor(mod: string) {
    this.modelo = mod;
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

export default Veiculo;