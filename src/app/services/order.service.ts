import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private uri = environment.apiUrlOrders

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.uri}/allOrders`)
  }

  getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.uri}/${id}`)
  }

  createOrder(order: { numberOrder: number, productIds: number[] }): Observable<Order> {
    return this.httpClient.post<Order>(`${this.uri}/create`, order)
  }

  updateOrder(id: number, order: { numberOrder: number, productIds: number[] }): Observable<Object> {
    return this.httpClient.put(`${this.uri}/editOrder/${id}`, order)
  }

  deleteOrder(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.uri}/${id}`)
  }

}
