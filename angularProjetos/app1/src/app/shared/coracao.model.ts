export class Coracao{
  constructor(
    public coracaoCheio: Boolean,
    public urlCoracaoCheio: string = './../assets/coracao_cheio.png',
    public urlCoracaoVazio: string = '../../assets/coracao_vazio.png',
  ){}

  public exibeCoracao(): string{
    if(this.coracaoCheio){
      return this.urlCoracaoCheio;

    }else{
      return this.urlCoracaoVazio;
    }
  }
}
