import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './composant/produit/produit.component';
import { AcceuilComponent } from './composant/acceuil/acceuil.component';
import { ErreurComponent } from './composant/erreur/erreur.component';
import { ListproduitComponent } from "./composant/listproduit/ListproduitComponent";
import { AproposComponent } from './composant/apropos/apropos.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LivraisonComponent } from './composant/livraison/livraison.component';
import { PromotionComponent } from './composant/promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AcceuilComponent,
    ErreurComponent,
    ListproduitComponent,
    AproposComponent,
    HeaderComponent,
    FooterComponent,
    LivraisonComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
