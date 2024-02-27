import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {MainPageComponent} from "./main_page/main-page.component";
import {CartPageComponent} from "./cart_page/cart-page.component";
import {ProductPageComponent} from "./product_page/product-page.component";
import {ProductPage2Component} from "./product_page2/product-page2.component";
import {ProductPage3Component} from "./product_page3/product-page3.component";
import {ProductPage4Component} from "./product_page4/product-page4.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductPage2Component,
    ProductPage3Component,
    ProductPage4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }