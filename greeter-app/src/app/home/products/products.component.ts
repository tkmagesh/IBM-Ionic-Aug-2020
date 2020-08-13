import { Component } from "@angular/core";
import * as moment from "moment";


interface Product{
    name : string,
    createdAt : Date
}

@Component({
    selector : 'app-products',
    template : `
        <h1>Products</h1>
        <hr>
        <ion-input type="text" #txtProductName></ion-input>
        <ion-button (click)="onAddNewClick(txtProductName.value)">Add New</ion-button>
        <br/>
        <ion-checkbox (ionChange)="shouldFormat = $event.target.checked"></ion-checkbox>
        <ion-label>Format</ion-label>
        <ol>
            <li *ngFor="let product of products">
                {{product.name}} - [{{ product.createdAt | elapsed:shouldFormat }}]
                <!-- {{product.name}} - [{{ getElapsed(product.createdAt) }}] -->
            </li>
        </ol>
    `
})
export class ProductsComponent{
    shouldFormat : boolean = false;

    products : Product[] = [
        { name : 'Pen', createdAt : new Date('10-Mar-2019')},
        { name: 'Pencil', createdAt: new Date('10-Jul-2020') }
    ];

    onAddNewClick(newProductName : string){
        const newProduct : Product = {
            name : newProductName,
            createdAt : new Date()
        } 
        this.products.push(newProduct);
    }

    getElapsed(date : Date){
        console.log('getElapsed invoked');
        return moment(date).fromNow();
    }
}