
import { Component, Input } from '@angular/core';
import { products2} from "../products2";
import {Product} from "../products";

@Component({
  selector: 'app-product-page2',
  templateUrl: './product-page2.component.html',
  styleUrls: ['./product-page2.component.css']
})
export class ProductPage2Component {
  products=[...products2]
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