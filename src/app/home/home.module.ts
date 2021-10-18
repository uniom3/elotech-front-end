import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { FormsModule } from '@angular/forms';
import { ListaContatoComponent } from './lista-contato/listacontato.component';
import { PessoasComponent } from './pessoas/pessoas.component';


@NgModule({
  declarations: [
    HomeComponent,
    OpcoesComponent,
    PessoasComponent,
    ListaContatoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
