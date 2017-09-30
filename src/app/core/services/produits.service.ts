import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ProduitDTO} from '../dtos/produit-dto';

@Injectable()
export class ProduitsService {

  constructor(private http:Http) { }

  getProduits() : Observable<ProduitDTO[]>{
    return this.http.get('/api/produits/all').map(data=>data.json());
  }

}
