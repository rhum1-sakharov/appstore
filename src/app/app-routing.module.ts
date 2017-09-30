import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path:'',
    redirectTo:'product-store',
    pathMatch:'full'
  },
  {
    path:'administration',
    loadChildren:'app/administration/administration.module#AdministrationModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
