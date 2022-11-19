import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  idProduit!:number
  constructor(private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
  }

}
