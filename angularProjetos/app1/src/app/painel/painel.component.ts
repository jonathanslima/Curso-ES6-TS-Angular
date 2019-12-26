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

  constructor() {
    console.log(this.frase);

  }

  consola(){
    console.log('works')
  }

  ngOnInit() {
  }

}
