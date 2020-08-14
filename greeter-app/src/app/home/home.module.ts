import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorResultComponent } from "./calculator/calculatorResult/calculatorResult.component";
import { CalculatorService } from "./calculator/calculator.service";
import { ProductsComponent } from "./products/products.component";
import { ElapsedPipe } from "./products/elapsed.pipe";
import { ProductsApi } from "./products/productsApi.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage
    , GreeterComponent
    , CalculatorComponent
    , CalculatorResultComponent
    , ProductsComponent
    , ElapsedPipe
  ],
  providers : [
    CalculatorService
    , ProductsApi
  ]
})
export class HomePageModule {}
