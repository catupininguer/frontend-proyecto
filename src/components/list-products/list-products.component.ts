import { Component, OnInit  } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
})
export class ListProductsComponent implements OnInit{
  listProducts: Product[] = [
  ]
  /*constructor(){}

    ngOnInit(): void{
    }
  } */

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.getListProducts();
  }
  getListProducts(){
    this._productService.getListProducts().subscribe((data) => {
      console.log(data);
    })
  }
    
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
  

