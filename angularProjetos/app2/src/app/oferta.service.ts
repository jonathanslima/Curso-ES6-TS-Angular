import { HttpClient } from '@angular/common/http';
import { oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { URL_API } from './urls.api';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class ofertasService{
  constructor(private http: HttpClient){}

  public getOfertas(): Promise<oferta[]>{
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((res: any) => res)
      .catch(error => console.error('ERRO: ', error))
  }

  public getOfertasPorCategoria(categoria: string): Promise<oferta[]>{
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((res: any)=> res)
      .catch(error => console.error('ERRO: ', error))
  }

  public getOfertaById(id: any): Promise<oferta[]>{
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(error => console.error('ERRO: ', error))
  }
}
