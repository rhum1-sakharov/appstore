import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsService} from './services/produits.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers:[
    ProduitsService
  ]
})
export class CoreModule { }
