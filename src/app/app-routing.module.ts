import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { ContentComponent } from './content/content.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'product/:id', component: ContentComponent},
  {path:'carts', component: CartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
