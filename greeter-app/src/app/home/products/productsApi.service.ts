import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsApi{

    private serviceEndPoint : string = 'http://localhost:3000/products';

    constructor(private http : HttpClient){

    }
    getAll() : Observable<Product[]>{
        return this.http
            .get<Product[]>(this.serviceEndPoint);
           
    }
    save(productData : Product) : Observable<Product>{
        if (productData.id === 0){
            //new product
            return this.http
                .post<Product>(this.serviceEndPoint, productData)
        } else {
            //existing product
            return this.http
                .put<Product>(`${this.serviceEndPoint}/${productData.id}`, productData)
        }
    }

    remove(productData : Product) : Observable<any>{
        return this.http
            .delete<Product>(`${this.serviceEndPoint}/${productData.id}`);
    }
}