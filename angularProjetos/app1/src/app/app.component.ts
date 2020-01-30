import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true;
  public vitoria : boolean = true;

  public encerraJogo(tipo: string){
    this.jogoEmAndamento = false;
    if(tipo == "derrota"){
      this.vitoria = false;
    }
  }

  public reiniciaJogo() : void{
    this.jogoEmAndamento = true;
    this.vitoria = undefined;
  }
}
