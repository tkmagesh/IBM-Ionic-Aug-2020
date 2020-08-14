import { Component, OnInit, OnDestroy } from '@angular/core';

import * as moment from "moment";
import { Product } from "./Product";
import { ProductsApi } from "./productsApi.service";

@Component({
    selector : 'app-products',
    template : `
        <h1>Products</h1>
        <hr/>
        <ion-input type="text" #txtProductName></ion-input>
        <ion-button (click)="onAddNewClick(txtProductName.value)">Add New</ion-button>
        <h3 *ngIf="isLoading else productsList">Loading...</h3>
        <ng-template #productsList>
            <ol>
                <li *ngFor="let product of products">
                    <span>{{product.name}} - [{{ product.createdAt | elapsed:true }}]</span>
                    <ion-button> [X] </ion-button>
                    <!-- {{product.name}} - [{{ getElapsed(product.createdAt) }}] -->
                </li>
            </ol>
        </ng-template>
    `
})
export class ProductsComponent implements OnInit, OnDestroy {

    isLoading : boolean = true;

    shouldFormat : boolean = false;

    products : Product[] = [];

    constructor(private productsApi: ProductsApi) {
        
    }

    ngOnInit(){
        this.productsApi
            .getAll()
            .subscribe(products => {
                this.products = products;
                this.isLoading = false;
            });
    }

    ngOnDestroy(){

    }

    onAddNewClick(newProductName : string){
        const newProductData : Product = {
            id : 0,
            name : newProductName,
            createdAt : new Date()
        } 
        this.productsApi
            .save(newProductData)
            .subscribe(newProduct => this.products.push(newProduct));
    }

    getElapsed(date : Date){
        console.log('getElapsed invoked');
        return moment(date).fromNow();
    }
}