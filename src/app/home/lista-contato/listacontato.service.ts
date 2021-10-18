import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ListacontatoService {

  constructor(private httpClient:HttpClient) { }

  criar(name: string, telefone: string, email: EmailValidator){
    return this.httpClient.post("https://elotechmendonca.herokuapp.com/listaContatos",{
      name: name,
      telefone: telefone,
      email: email
    })
  }
}
