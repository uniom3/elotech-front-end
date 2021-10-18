import { ListaContatosModule } from './home/lista-contato/listacontato.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoasModule } from './home/pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PessoasModule,
    ListaContatosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
