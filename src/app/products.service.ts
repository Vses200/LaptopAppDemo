import { ProductDetails } from './product-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  imageRootPath:string = 'assets/';

  
  getAllProducts():ProductDetails[]
  {
    let hpLaptop : ProductDetails = {
      productName : 'HP-Laptop - 123',
      productCost : 75000,
      rating:4,
      date:new Date("2019-01-01"),
      description:'HP Laptop 2021',
      imageName:this.imageRootPath+ 'hp.png'
    }

    let appleLaptop : ProductDetails = {
      productName : 'Apple - Macbook Pro - 123',
      productCost : 175000,
      rating:5,
      date:new Date("2020-02-02"),
      description:'Apple Laptop 2021',
      imageName:this.imageRootPath+ 'hp.png'
    }

    let dellLaptop : ProductDetails = {
      productName : 'Dell - 123',
      productCost : 115000,
      rating:3,
      date:new Date("2018-03-03"),
      description:'Dell Laptop 2021',
      imageName:this.imageRootPath+ 'hp.png'
    }

    let lenovoLaptop : ProductDetails = {
      productName : 'Lenovo - 123',
      productCost : 65000,
      rating:5,
      date:new Date("2021-04-04"),
      description:'All New Lenovo Laptop 2021',
      imageName:this.imageRootPath+ 'hp.png'
    }

    
    return [hpLaptop,dellLaptop,appleLaptop,lenovoLaptop];
  }
  
  

}
