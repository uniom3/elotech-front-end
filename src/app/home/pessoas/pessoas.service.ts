import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private httpClient:HttpClient) { }

  criar(nome: string, cpf: string, data: Data){
    return this.httpClient.post("https://elotechmendonca.herokuapp.com/Pessoas",{
      nome: nome,
      cpf: cpf,
      data: data
    })
  }
}
