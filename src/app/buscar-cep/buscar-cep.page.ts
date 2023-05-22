import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.page.html',
  styleUrls: ['./buscar-cep.page.scss'],
})
export class BuscarCepPage {

  estado: string = "";
  cidade: string = "";
  rua: string = "";

  buscaRes : any;

  constructor( private api:ApiServiceService) { }

  async exibir(){
    this.buscaRes = await this.api.buscaCep(this.estado, this.cidade, this.rua);
  };
}
