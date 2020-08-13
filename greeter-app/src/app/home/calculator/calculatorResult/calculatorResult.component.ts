import { Component, Input } from "@angular/core";
import { CalculatorService } from '../calculator.service';
@Component({
    selector : 'app-calculator-result',
    templateUrl : './calculatorResult.component.html',
    styleUrls : ['./calculatorResult.component.scss']
})
export class CalculatorResultComponent{
    constructor(private calculatorService : CalculatorService){

    }
   
}