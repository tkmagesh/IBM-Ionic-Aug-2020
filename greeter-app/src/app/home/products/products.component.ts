import { Component } from "@angular/core";

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
        <ol>
            <li *ngFor="let product of products">
                {{product.name}} - [{{product.createdAt | date:'dd-MMM-yyyy hh:mm:ss a'}}]
            </li>
        </ol>
    `
})
export class ProductsComponent{
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
}