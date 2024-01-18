import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private uri = environment.apiUrlProducts

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.uri}/allProducts`)
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.uri}/${id}`)
  }

  createProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.uri}/create`, product)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.uri}/${id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.uri}/${id}`)
  }

}
