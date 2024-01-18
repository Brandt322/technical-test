import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'editOrder/:id', component: EditOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
