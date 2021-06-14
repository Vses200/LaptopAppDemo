import { ProductsService } from './../products.service';
import { ProductDetails } from './../product-details';
import { Component, OnInit } from '@angular/core';
import { isTemplateSpan } from 'typescript';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

 __productService:ProductsService;
 unitsInCart:number = 0; 
 cartItems:string="";
 

 constructor(ps:ProductsService) { 
   this.__productService = ps;
 }

 ngOnInit(): void {
  }

  getRating(num:number):number[]{
    let arr= Array.from(Array(num).keys());
    return arr;
  }

  getAllProducts():ProductDetails[]
  {

    return this.__productService.getAllProducts();
  }

  addToCart(pname:string)
  {
    this.unitsInCart++;
    this.cartItems=this.cartItems+pname+"\n";
    
    
    
    console.log(this.unitsInCart);
  }
  doShare(pname:string){
      console.log(pname+"has been shared");
  }
}
