import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public tentativas : number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.coracoes.length !== this.tentativas){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].coracaoCheio = false;
    }

  }

  ngOnDestroy(){

  }

}
