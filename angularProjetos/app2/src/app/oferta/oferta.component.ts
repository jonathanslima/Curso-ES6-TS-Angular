import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertasService } from '../oferta.service';
import { oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ ofertasService ]
})
export class OfertaComponent implements OnInit {

  public ofertas: oferta[];

  constructor(
    private route: ActivatedRoute,
    private ofertasService: ofertasService
  ) { }

  ngOnInit() {
    // console.log('route param: ', this.route.snapshot.params.id)
    let p: string;
    
    this.route.params.subscribe((param: any)=>{
      p = param.id;
    })

    this.ofertasService.getOfertaById(p)
    .then((data: oferta[]) => {
        console.log(data)
        this.ofertas = data;
      })
  }
}
