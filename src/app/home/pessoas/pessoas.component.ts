import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})

export class PessoasComponent implements OnInit {

  nome='';
  cpf='';
  data='';

  constructor() { }

  ngOnInit(): void {
  }



}
