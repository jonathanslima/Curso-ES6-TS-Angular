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

  constructor() {
    this.rodadaFrase = this.frase[this.rodada];

  }

  public atualizaFrase(val): void{
    this.rodadaFrase = this.frase[val].fraseEng;

  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void{

    if(this.resposta == this.frase[this.rodada].frasePor){
      console.log('true')

    }else{
      console.log('false')
    }
    this.rodada = this.rodada + 1;
    this.atualizaFrase(this.rodada);

  }

  ngOnInit() {
  }

}
