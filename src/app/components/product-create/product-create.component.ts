import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product()
  productForm: FormGroup

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(500)]),
      'unitPrice': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(20000)]),
    })
  }

  createProduct() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(data => {
        console.log(data)
        this.goToProductList()
      },
        error => console.error(error))
    } else {
      console.log('Form is not valid')
    }
  }

  goToProductList() {
    this.router.navigate(['/products'])
  }

  onSubmit() {
    this.createProduct()
  }
}
