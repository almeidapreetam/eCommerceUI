import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { LeftSidebarAreaComponent } from './left-sidebar-area/left-sidebar-area.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { TrendingItemComponent } from './trending-item/trending-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    MenubarComponent,
    ImageSliderComponent,
    HomeCategoryComponent,
    LeftSidebarAreaComponent,
    CategoryProductComponent,
    TrendingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
