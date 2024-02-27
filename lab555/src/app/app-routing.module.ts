import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CartPageComponent} from "./cart_page/cart-page.component";
import {MainPageComponent} from "./main_page/main-page.component";
import {ProductPageComponent} from "./product_page/product-page.component";
import {products} from "./products";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {ProductPage2Component} from "./product_page2/product-page2.component";
import {products2} from "./products2";
import {ProductPage3Component} from "./product_page3/product-page3.component";
import {products3} from "./products3";
import {ProductPage4Component} from "./product_page4/product-page4.component";
import {products4} from "./products4";

const routes: Routes = [
  {
    path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'/',pathMatch:'full'},
        {path:'', component:MainPageComponent},
        {path:'product',component:ProductPageComponent},
        {path:'products2',component:ProductPage2Component},
        {path:'products3',component:ProductPage3Component},
        {path:'products4',component:ProductPage4Component},
       
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }