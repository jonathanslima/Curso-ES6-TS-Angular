import { Component, OnInit } from '@angular/core';
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
  public resposta: string;
  public rodada: number = 0;
  public rodadaFrase: FraseModel;
  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frase[this.rodada];

  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void{
    let textarea = (<HTMLInputElement>document.querySelector('.jumbotron textarea'));
    if(this.rodada == this.frase.length){
      alert('Você venceu!')
      return;
    }

    if(this.resposta == this.rodadaFrase.frasePor){
      this.progresso += (100/this.frase.length);
      textarea.value = '';
      textarea.focus();
      this.rodada++;

      if(this.rodada == this.frase.length) {
        textarea.disabled = true;
        return
      }else{
        this.rodadaFrase = this.frase[this.rodada];

      }

    }else{
      console.log('false')
    }

  }

  ngOnInit() {
  }

}
