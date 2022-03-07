import { Injectable } from '@angular/core';
import { ProductComponent } from './product/product.component';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartlist:any=[]
  totalprice:number=0
  
  constructor() { }
  
  getCartItems()
  {
    return this.cartlist;
  }
}
