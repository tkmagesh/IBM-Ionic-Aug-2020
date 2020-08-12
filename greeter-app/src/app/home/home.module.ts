import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorResultComponent } from "./calculator/calculatorResult/calculatorResult.component";
import { CalculatorService } from "./calculator/calculator.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage
    , GreeterComponent
    , CalculatorComponent
    , CalculatorResultComponent
  ],
  providers : [
    CalculatorService
  ]
})
export class HomePageModule {}
