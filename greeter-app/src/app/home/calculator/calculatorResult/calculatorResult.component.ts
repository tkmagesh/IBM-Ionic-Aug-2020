import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-calculator-result',
    templateUrl : './calculatorResult.component.html',
    styleUrls : ['./calculatorResult.component.scss']
})
export class CalculatorResultComponent{
    @Input('data')
    result : number = 0;
}