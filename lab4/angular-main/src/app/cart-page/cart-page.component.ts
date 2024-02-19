import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  products=[{name:'asda', 
  description:'asdas',
  link:"https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
  imgURL:'https://avatars.mds.yandex.net/i?id=6f28a7580d9f6a5d8de392eede993df70f607ac3-8497038-images-thumbs&n=13',
  rating:5
}
]
  public share(link:string){
    window.location.href = link;
  }

}