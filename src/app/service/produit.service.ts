import { Injectable } from '@angular/core';
import { Commentaire } from '../classes/commentaire';
import { Produit } from '../classes/produit';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/produits'
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listProduits !:Produit
  constructor(private http: HttpClient) { }
  getProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
  }
  addproduit(p: Produit): Observable<Produit>{
    return this.http.post<Produit>(URL, p);
  }
}
