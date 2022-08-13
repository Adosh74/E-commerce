import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  constructor() { }

  cartArray:any

  ngOnInit(): void {
    let cart:any = localStorage.getItem("cart")
    this.cartArray = JSON.parse(cart)
  }

}
