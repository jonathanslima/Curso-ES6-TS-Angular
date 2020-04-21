import { Component, OnInit } from '@angular/core';
import { ofertasService } from '../oferta.service';
import { oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ofertasService]
})
export class DiversaoComponent implements OnInit {
  public ofertas: oferta[];

  constructor(private ofertasService: ofertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then(res => {
        this.ofertas = res;
        console.log(res)
      })

  }

}
