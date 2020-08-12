import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    template : `
        <h1>Products</h1>
        <hr>
        <ion-input type="text" #txtProductName></ion-input>
        <ion-button (click)="onAddNewClick(txtProductName.value)">Add New</ion-button>
        <ol>
            <li *ngFor="let productName of productNames">{{productName}}</li>
        </ol>
    `
})
export class ProductsComponent{
    productNames : string[] = ['Pen', 'Pencil', 'Marker'];

    onAddNewClick(newProductName : string){
        this.productNames.push(newProductName);
    }
}