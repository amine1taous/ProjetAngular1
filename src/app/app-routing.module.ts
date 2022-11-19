import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './composant/acceuil/acceuil.component';
import { AproposComponent } from './composant/apropos/apropos.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { ListproduitComponent } from "./composant/listproduit/ListproduitComponent";

const routes: Routes = [
  { path: 'acceuil', title: "Acceuil", component: AcceuilComponent },
  
  { path: 'apropos', title: 'Apropos', component: AproposComponent },
  { path: 'listproduit', title: 'listProduit', component: ListproduitComponent },
  //ajouter ici
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  {path: '**' , title:"erreur", component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
