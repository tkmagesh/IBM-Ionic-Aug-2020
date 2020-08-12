export class CalculatorService{

    result: number = 0;
    _n1: number = 0;
    _n2: number = 0;

    set n1(value: string) {
        this._n1 = parseFloat(value);
    }

    set n2(value: string) {
        this._n2 = parseFloat(value);
    }

    get n1(): string {
        return String(this._n1) || '';
    }

    get n2(): string {
        return String(this._n2) || '';
    }

    add() {
        this.result = this._n1 + this._n2;
    }

    subtract()  {
        this.result = this._n1 - this._n2;
    }

    multiply()  {
        this.result = this._n1 * this._n2;
    }

    divide()  {
        this.result = this._n1 / this._n2;
    }
}