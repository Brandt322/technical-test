import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private uri = environment.apiUrlOrders

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.uri}/allOrders`)
  }
}
