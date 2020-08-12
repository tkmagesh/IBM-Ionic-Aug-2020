import { Component } from "@angular/core";
import { CalculatorService } from "./calculator.service";

@Component({
    selector : 'app-calculator',
    templateUrl : './calculator.component.html',
    styleUrls : ['./calculator.component.scss']
})
export class CalculatorComponent{
    

    /*calculatorService : CalculatorService;

    constructor(calculatorService: CalculatorService){
        this.calculatorService = calculatorService;
    } */

    constructor(private calculatorService : CalculatorService){

    }

    
}