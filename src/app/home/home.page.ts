import { Component } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dadosCep : any;
  cep : string = "";

  constructor( private api:ApiServiceService) {}

  async exibir(){
    this.dadosCep = await this.api.getCep(this.cep);
  };
};