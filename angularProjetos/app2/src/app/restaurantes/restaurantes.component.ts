import { Component, OnInit } from '@angular/core';
import { oferta } from '../shared/oferta.model';
import { ofertasService } from '../oferta.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [ofertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: oferta[];
  constructor(private ofertasService: ofertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((res: oferta[] )=> {
        this.ofertas = res;
      })
      .then(()=>{
        console.log(this.ofertas)

      })
  }

}
