
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',
   pathMatch:'full',
   redirectTo: 'home',
},
{
  path:'home',
  loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule)
},
{
  path: 'pessoas',
  loadChildren:()=> import('./home/pessoas/pessoas.module').then((m)=> m.PessoasModule)
},
{
path: 'listaContatos',
loadChildren:()=> import('./home/lista-contato/listacontato.module').then((m)=> m.ListaContatosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
