import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Cartlist } from '../cartlist';


import { ProductService } from '../product.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cartlistmodel = new Cartlist("", "", 0, "", 1);
  productlist: any = []
cartItem:any={}
qty:number=0
newitem:boolean=true

  addToCart(product: any) {


    this.cartlistmodel=new Cartlist(product.id,product.name,product.price,product.img,product.qty)
    
    for(let item of this.cs.cartlist){
      if(JSON.stringify(item)===JSON.stringify(product))
      {
        this.newitem=false
        this.qty=product.qty+1;  
        this.cartItem={...this.cartlistmodel,qty:this.qty}
        this.cs.cartlist.splice(this.cs.cartlist.indexOf(item),1,this.cartItem);
      }

    }

    if(this.newitem===true){
    this.cs.cartlist.push(this.cartlistmodel);
    }

  }
  
  constructor(private ps: ProductService, private cs: CartService) {

  }

  ngOnInit(): void {
    // console.log(this.ps.getProducts().then(x=>x.json()).then( data=>this.productlist=data));

    this.ps.getProducts().subscribe(x => {this.productlist = x});

  }

}
