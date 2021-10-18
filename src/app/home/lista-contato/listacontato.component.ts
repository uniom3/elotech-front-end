import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacontato',
  templateUrl: './listacontato.component.html',
  styleUrls: ['./listacontato.component.css']
})
export class ListaContatoComponent implements OnInit {

  name='';
  telefone='';
  email='';

  constructor() { }

  ngOnInit(): void {
  }

  criar(){
  }
}
