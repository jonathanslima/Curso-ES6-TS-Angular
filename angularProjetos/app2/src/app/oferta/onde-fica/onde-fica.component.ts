import { Component, OnInit } from '@angular/core';
import { ofertasService } from '../../oferta.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [ofertasService]
})
export class OndeFicaComponent implements OnInit {
  public local: string = "carregando local...";
  constructor(
    private oferta: ofertasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log('local: ', this.route.parent.snapshot.params['id']);
    this.oferta.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((res: any) => this.local = res[0].descricao)
  }

}
