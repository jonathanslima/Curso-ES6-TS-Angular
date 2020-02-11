import { Component, OnInit } from '@angular/core';
import { ofertasService } from '../oferta.service';
import { oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ofertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: oferta[];
  constructor(private ofertasService: ofertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.GetOfertas();
    this.ofertasService.getOfertas()
      .then(oferta => {
        this.ofertas = oferta;
      })
  }

}
