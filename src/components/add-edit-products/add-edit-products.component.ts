import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
//import {  HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-add-edit-products',
  imports: [CommonModule, RouterModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})

export class AddEditProductsComponent implements OnInit {
  form: FormGroup;

  constructor (private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],

    })
  }

  ngOnInit(): void {
}
  addProduct(){
    //console.log(this.form.value.name);
    const product: Product= {
    name: this.form.value.name,
    description: this.form.value.description,
    price: this.form.value.price,
    stock: this.form.value.stock
  }
  console.log(product)
  }
}