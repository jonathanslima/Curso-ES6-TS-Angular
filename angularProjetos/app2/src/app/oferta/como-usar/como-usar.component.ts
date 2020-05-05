import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertasService } from '../../oferta.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [ofertasService]
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = "carregando instruções..."
  constructor(
    private route: ActivatedRoute,
    private oferta: ofertasService  
  ) { }

  ngOnInit() {
    // console.log('usar: ', this.route.parent.snapshot.params['id']);
    this.oferta.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((res: any) => this.comoUsar = res[0].descricao)
  }

}
