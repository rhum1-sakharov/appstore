import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStoreRoutingModule } from './product-store-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  imports: [
    CommonModule,
    ProductStoreRoutingModule
  ],
  declarations: [ProductlistComponent]
})
export class ProductStoreModule { }
