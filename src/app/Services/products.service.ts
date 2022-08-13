import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url='http://localhost:3000/'
  constructor(public http:HttpClient) { }
  getproducts():Observable<any>{
    return this.http.get(`${this.url}products`);
  }
  getProductsById(id:any):Observable<any>{
    return this.http.get(`${this.url}products/${id}`);
  }
}
