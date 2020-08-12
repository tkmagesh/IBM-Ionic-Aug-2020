import { Component } from "@angular/core";
import { CalculatorService } from "./calculator.service";

@Component({
    selector : 'app-calculator',
    templateUrl : './calculator.component.html',
    styleUrls : ['./calculator.component.scss']
})
export class CalculatorComponent{
    result : number = 0;
    _n1 : number = 0;
    _n2 : number = 0;

    calculatorService : CalculatorService;

    constructor(calculatorService: CalculatorService){
        this.calculatorService = calculatorService;
    }

    set n1(value : string){
        this._n1 = parseFloat(value);
    }

    set n2(value : string){
        this._n2 = parseFloat(value);
    }

    get n1() : string{
        return String(this._n1) || '';
    } 

    get n2() : string {
        return String(this._n2) || '';
    }

    clearInputs(){
        /* this.n1 = '';
        this.n2 = ''; */
    }

    onAddClick() : void {
        this.result = this.calculatorService.add(this._n1, this._n2);
        this.clearInputs();
    }

    onSubtractClick(): void {
        this.result = this.calculatorService.subtract(this._n1, this._n2);
        this.clearInputs();
    }

    onMultiplyClick(): void {
        this.result = this.calculatorService.multiply(this._n1, this._n2);
        this.clearInputs();
    }

    onDivideClick(): void {
        this.result = this.calculatorService.divide(this._n1, this._n2);
        this.clearInputs();
    }
}