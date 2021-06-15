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
      productName : 'Paracetamol',
      productCost : 10,
      rating:4,
      date:new Date("2019-01-01"),
      description:'Paracetamol',
      imageName:this.imageRootPath+ 'cetamol.jpg'
    }

    let appleLaptop : ProductDetails = {
      productName : 'Painkiller',
      productCost : 20,
      rating:5,
      date:new Date("2020-02-02"),
      description:'Pain Killer',
      imageName:this.imageRootPath+ 'pain.jpg'
    }

    let dellLaptop : ProductDetails = {
      productName : 'Antihistamines',
      productCost : 50,
      rating:3,
      date:new Date("2018-03-03"),
      description:'Anti histamines',
      imageName:this.imageRootPath+ 'antihistamines.jpg'
    }

    let lenovoLaptop : ProductDetails = {
      productName : 'Antacids',
      productCost : 20,
      rating:5,
      date:new Date("2021-04-04"),
      description:'Anti Acid',
      imageName:this.imageRootPath+ 'antacids.jpg'
    }

    
    return [hpLaptop,dellLaptop,appleLaptop,lenovoLaptop];
  }
  
  

}
