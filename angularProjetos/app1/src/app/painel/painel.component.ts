import { Component, OnInit, Input } from '@angular/core';
import { FraseModel } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public frase: FraseModel[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: FraseModel;
  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();

  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frase[this.rodada];
    this.resposta = '';
  }

  public verificaResposta(): void{
    let textarea = (<HTMLInputElement>document.querySelector('.jumbotron textarea'));
    if(this.rodada == this.frase.length){
      alert('Você venceu!')
      return;
    }

    if(this.resposta == this.rodadaFrase.frasePor){
      this.progresso += (100/this.frase.length);
      textarea.focus();
      this.rodada++;

      if(this.rodada == this.frase.length) {
        textarea.disabled = true;
        alert('Você venceu!')
        return
      }else{
        this.atualizaRodada();

      }

    }else{
      this.tentativas--;
      console.log(this.tentativas)


      if(this.tentativas == -1){
        alert('Você perdeu!')
      }
    }

  }



  ngOnInit() {
  }

}
