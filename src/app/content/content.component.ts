import { Component, OnInit } from '@angular/core';
import { prointerface } from '../products/file';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id: any;
  product:prointerface = {
    category: "",
    title: "",
    image:"",
    price: 0,
    id:0,
    description:"",
  }

  constructor(private productsService:ProductsService, private route:ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => this.id = paramMap.get('id'))
  }

  ngOnInit(): void {
    this.productsService.getProductsById(this.id).subscribe(p => {
      this.product = p[0]
    })
  }

  addToCart() {
    let cart = localStorage.getItem("cart")
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([this.product]))
    } else{
      let cartArr = JSON.parse(cart)
      cartArr.push(this.product)
      localStorage.setItem("cart", JSON.stringify(cartArr))
    }
  }
}
