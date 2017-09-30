import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProduitsComponent} from './produits/produits.component';
import {AdminrootComponent} from './adminroot/adminroot.component';

const routes: Routes = [
  {
    path: '',
    component: AdminrootComponent,
    children: [{
      path: 'produits',
      component: ProduitsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
