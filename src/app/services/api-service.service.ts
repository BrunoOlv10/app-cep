import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor( private httpClient:HttpClient) { }

  async getCep(cep : string) {
    let cepRes = {};
    await this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).forEach((res) => { cepRes = res });
    return cepRes;
  }

  async buscaCep(estado: string, cidade: string, rua: string) {
    let buscaRes: Object[] = [];
    await this.httpClient.get(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`).forEach((res) => { buscaRes.push(res)});
    return buscaRes[0];
  }
}