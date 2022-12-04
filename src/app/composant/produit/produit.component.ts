import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  idProduit!: number;
  produit!: Produit;
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: ProduitService
  ) {}

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.service
      .getproduitbyid(this.idProduit)
      .subscribe((data) => (this.produit = data));
  }
}
