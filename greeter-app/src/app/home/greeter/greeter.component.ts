import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls: ['greeter.component.scss']
})
export class GreeterComponent{
    public message : string = 'Greet Message';

    onBtnGreetClick(userName : string){
        this.message = `Hi ${userName}, Have a nice day!`;
    }
}