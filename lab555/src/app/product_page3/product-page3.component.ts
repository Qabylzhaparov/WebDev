import { Component } from '@angular/core';
import { products3} from "../products3";
import {Product} from "../products";

@Component({
  selector: 'app-product-page3',
  templateUrl: './product-page3.component.html',
  styleUrls: ['./product-page3.component.css']
})
export class ProductPage3Component {
  products=[...products3]

  share(product: Product){
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}`);
  }
  likeButtonClick(index:number) {
    this.products[index].numberOfLikes++;
  }
  deleteButton(index:number){
    this.products.splice(index,1)
  }
}