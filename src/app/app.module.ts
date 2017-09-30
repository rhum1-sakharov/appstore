import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GdriveComponent } from './gdrive/gdrive.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductStoreModule} from './product-store/product-store.module';
import {AdministrationModule} from './administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
