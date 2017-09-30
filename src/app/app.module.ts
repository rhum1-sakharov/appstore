import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductStoreModule} from './product-store/product-store.module';
import {AdministrationModule} from './administration/administration.module';
import {CoreModule} from './core/core.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductStoreModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
