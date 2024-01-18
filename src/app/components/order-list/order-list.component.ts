import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  constructor(private orderService: OrderService) { }
  orders: Order[]

  ngOnInit(): void {
    this.getOrders()
  }

  private getOrders() {
    this.orderService.getOrders().subscribe(data => {
      console.log(data)
      this.orders = data
    })
  }
}
