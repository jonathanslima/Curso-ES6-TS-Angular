import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {
  public coracoes: Coracao[] = [
    new Coracao(false),
    new Coracao(false),
    new Coracao(false),
  ]

  constructor() {}

  ngOnInit() {
  }

}
