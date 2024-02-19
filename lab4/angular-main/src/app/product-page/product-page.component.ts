import { Component } from '@angular/core';
import { products} from "../products";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products=[...products]

  public share(link:string){
    window.location.href = link;
  }
}
