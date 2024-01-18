import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/models/order';
import { Modal } from 'flowbite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  constructor(private orderService: OrderService, private router: Router) { }
  modal: any
  orders: Order[]
  orderToDelete: any

  ngOnInit(): void {
    this.getOrders()
    this.modal = new Modal(document.getElementById('delete-modal'))
  }

  private getOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data
    })
  }

  edit(order: Order) {
    this.router.navigate(['/editOrder', order.id])
  }

  deleteProduct() {
    if (this.orderToDelete) {
      this.orderService.deleteOrder(this.orderToDelete.id).subscribe(data => {
        this.getOrders()
        this.closeModal()
      })
    }
  }

  openDeleteModal(order: any) {
    this.orderToDelete = order
    this.modal = new Modal(document.getElementById('delete-modal'))
    this.modal.show()
  }

  closeModal() {
    this.modal.hide()
    let backdrop = document.querySelector('.modal-backdrop')
    if (backdrop) {
      backdrop.remove()
    }
  }


}
