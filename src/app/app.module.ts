import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CatalogComponent } from './catalog/catalog.component';

import { MatTableModule } from '@angular/material';
import { BannerComponent } from './header/banner/banner.component';
import { CartComponent } from './header/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BannerComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
