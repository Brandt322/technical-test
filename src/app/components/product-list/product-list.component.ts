import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  constructor(private productService: ProductService, private router: Router) { }
  products: Product[]
  selectedProduct: any = {}
  modal: Modal
  productToDelete: any = null

  ngOnInit(): void {
    this.getProducts()
    this.modal = new Modal(document.getElementById('edit-modal'))
  }

  ngAfterViewInit(): void {
    this.modal = new Modal(document.getElementById('edit-modal'))
  }

  private getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  deleteProduct() {
    if (this.productToDelete) {
      this.productService.deleteProduct(this.productToDelete.id).subscribe(data => {
        console.log(data);
        this.getProducts();
        this.closeModal();
      });
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(data => {
      this.getProducts()
      this.closeModal()
    })
  }

  openModal(product: any) {
    this.selectedProduct = product
    this.modal = new Modal(document.getElementById('edit-modal'));
    this.modal.show();
  }

  openDeleteModal(product: any) {
    this.productToDelete = product;
    this.modal = new Modal(document.getElementById('delete-modal'));
    this.modal.show();
  }

  closeModal() {
    this.modal.hide()
    let backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
