import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from './productlist/productlist.component';

const routes: Routes = [
  {
    path:'product-store',
    component:ProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductStoreRoutingModule { }
