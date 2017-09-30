import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProduitDTO} from '../../core/dtos/produit-dto';
import {ProduitsService} from '../../core/services/produits.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  produits$ : Observable<ProduitDTO[]>

  constructor(private produitSvc : ProduitsService) { }

  ngOnInit() {

    this.produits$ = this.produitSvc.getProduits();

  }

}
