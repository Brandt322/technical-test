import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderListComponent,
    ProductCreateComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
