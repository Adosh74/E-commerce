import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { prointerface } from './file';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  x:number=0
  constructor(public pservice:ProductsService) { }
  product:prointerface[]=[]
  productsearch:prointerface[]=this.product
  private _searchfilter!:string;
get searchfilter():string{
  return this._searchfilter;
}
set searchfilter(value:string)
{
  this._searchfilter=value;
  this.productsearch=this.profilter(value);
}
  ngOnInit(): void {
this.pservice.getproducts().subscribe({next:(data)=>{
  this.product=data;
  this.productsearch=this.product;
}})
  }
  profilter(val:string){
    return this.product.filter((p)=>
    p.title.includes(val.toLocaleLowerCase())
    )
  }
  toaddcart(){
    this.x+=1;
}
}
