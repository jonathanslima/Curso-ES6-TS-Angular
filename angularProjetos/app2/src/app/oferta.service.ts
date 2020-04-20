import { HttpClient } from '@angular/common/http';
import { oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class ofertasService{
  constructor(private http: HttpClient){}

  public getOfertas(): Promise<oferta[]>{
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((res: any) => res)
      .catch(error => console.error('ERRO: ', error))
  }

  public getOfertasPorCategoria(categoria: string): Promise<oferta[]>{
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: any)=> res)
      .catch(error => console.error('ERRO: ', error))
  }
}
