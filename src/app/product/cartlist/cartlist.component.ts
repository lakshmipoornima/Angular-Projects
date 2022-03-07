import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cartlist } from 'src/app/cartlist';



@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {


   cartItemlist:any=[]
   cartItem:any={}
  tprice:number=0
   qty:number=0
   
  
   cartlistmodel=new Cartlist("","",0,"",0);

   updateQty(product:any){
     
    this.qty=product.qty+1
     
     this.cartlistmodel=new Cartlist(product.id,product.name,product.price,product.img,product.qty)
     this.cartItem={...this.cartlistmodel,qty:this.qty}//Updated cartlistmodel with new qty
          
       for(let item of this.cs.cartlist){

        
        if(JSON.stringify(item)===JSON.stringify(product)){
        
         this.cs.cartlist.splice(this.cs.cartlist.indexOf(item),1,this.cartItem);
         this.cartItemlist=this.cs.getCartItems().map((obj: any)=>({...obj}));
         this.tprice=this.tprice-(item.price*item.qty)+(item.price*this.qty);
         
        }
       
       }
      
   }
  
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cartItemlist=this.cs.getCartItems().map((obj: any)=>({...obj}));
    for(let item of this.cartItemlist)
    {
      this.cs.totalprice=this.cs.totalprice+item.price*item.qty;
      this.tprice=this.cs.totalprice;
      
    }
    this.cs.totalprice=0
    
  
  }

}
