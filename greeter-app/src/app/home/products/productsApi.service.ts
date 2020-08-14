import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsApi{

    constructor(private http : HttpClient){

    }
    getAll() : Observable<Product[]>{
        return this.http
            .get<Product[]>('http://localhost:3000/products');
           
    }
}