import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts()
  {
   // return fetch("http://localhost:4200/assets/product.json")
   return this.http.get("http://localhost:4200/assets/product.json");
  }
}
