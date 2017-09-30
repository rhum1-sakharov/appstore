import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ProduitsComponent } from './produits/produits.component';
import { AdminrootComponent } from './adminroot/adminroot.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  declarations: [
    ProduitsComponent,
    AdminrootComponent
  ],
  exports:[
    ProduitsComponent,
    AdminrootComponent
  ]
})
export class AdministrationModule { }
