import { Component } from "@angular/core";

import * as moment from "moment";
import { Product } from "./Product";
import { ProductsApi } from "./productsApi.service";

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
                {{product.name}} - [{{ product.createdAt | elapsed:true }}]
                <!-- {{product.name}} - [{{ getElapsed(product.createdAt) }}] -->
            </li>
        </ol>
    `
})
export class ProductsComponent{

    
    shouldFormat : boolean = false;

    products : Product[] = [];

    constructor(private productsApi: ProductsApi) {
        this.productsApi
            .getAll()
            .subscribe(products => this.products = products);
    }

    onAddNewClick(newProductName : string){
        const newProduct : Product = {
            id : 0,
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