import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  orderForm: FormGroup
  orderId: string | null
  products: Product[] = []
  selectedProducts: Product[] = []
  isEditing = false
  order: Order

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private orderService: OrderService
  ) {
    this.orderForm = this.formBuilder.group({
      numberOrder: ['', Validators.required],
      products: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id')
    this.productService.getProducts().subscribe(allProducts => {
      if (this.orderId) {
        this.orderService.getOrder(+this.orderId).subscribe(order => {
          if (order) {
            this.isEditing = true
            this.order = order
            this.products = allProducts
            // Initialize selectedProducts with the products in the order
            this.selectedProducts = [...order.products]
          } else {
            this.products = allProducts
          }
        }, error => {
          if (error.status === 404) {
            this.products = allProducts
          }
        })
      } else {
        this.products = allProducts
      }
    })
  }

  isProductSelected(product: Product): boolean {
    return this.selectedProducts.some(p => p.id === product.id)
  }

  selectProduct(event: Event, product: Product): void {
    event.stopPropagation()
    if (this.isProductSelected(product)) {
      // Remove product from selectedProducts
      const index = this.selectedProducts.findIndex(p => p.id === product.id)
      if (index > -1) {
        this.selectedProducts.splice(index, 1)
      }
    } else {
      // Add product to selectedProducts
      this.selectedProducts.push(product)
    }
  }

  submitOrder() {

    const newOrder = {
      numberOrder: this.orderForm.value.numberOrder,
      productIds: this.selectedProducts.map(product => product.id)
    }

    this.orderService.createOrder(newOrder).subscribe(
      (order) => {
        this.router.navigate(['/orders'])
      },
      (error) => {
        console.error(error)
      }
    )
  }

  updateOrder(): void {
    if (this.orderId === null || !this.orderForm.value.numberOrder) {
      return
    }

    const orderIdNumber = Number(this.orderId)
    if (isNaN(orderIdNumber)) {
      return
    }

    const numberOrder = Number(this.orderForm.value.numberOrder)
    if (isNaN(numberOrder)) {
      // Handle the case where orderNumber is not a valid number
      console.error('Invalid order number')
      return
    }

    const orderData = {
      numberOrder: numberOrder,
      productIds: this.selectedProducts.map(product => product.id)
    }

    this.orderService.updateOrder(orderIdNumber, orderData).subscribe(() => {
      this.router.navigate(['/orders'])
      console.log('Order updated successfully')
    }, error => {
      console.error('Error updating order', error)
    })
  }
}
