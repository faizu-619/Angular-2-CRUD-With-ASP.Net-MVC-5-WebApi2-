import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { ICategory } from './models/category';
import { IExpense } from './models/expense';

@Injectable()
export class SharedService {
    baseUrl = "api/";


    constructor(private _http: Http) { }

   //Category Start

    getCategories() {
        return this._http.get(this.baseUrl + 'Categories/GetCategories')
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    getCategory(id: number) {
        return this._http.get(this.baseUrl + 'Categories/GetCategory/' + id)
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    saveCategory(_category: ICategory) {
        if (_category.categoryID < 1) {
            return this._http.post(this.baseUrl + 'Categories/PostCategory', _category)
                .map(responce => { return responce.json(); })
                .catch(error => Observable.throw(error.json()));
        }
        else {
            return this._http.put(this.baseUrl + 'Categories/PutCategory/' + _category.categoryID, _category)
                .map(responce => { return responce.json(); })
                .catch(error => Observable.throw(error.json()));
        }
    }

    removeCategory(id: number) {
        return this._http.delete(this.baseUrl + 'Categories/DeleteCategory/' + id)
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    //Category End

    //Expense Start

    getExpenses() {
        return this._http.get(this.baseUrl + 'Expenses/GetExpenses')
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    getExpense(id: number) {
        return this._http.get(this.baseUrl + 'Expenses/GetExpense/' + id)
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    saveExpense(_expense: IExpense) {
        if (_expense.expenseID < 1) {
            return this._http.post(this.baseUrl + 'Expenses/PostExpense', _expense)
                .map(responce => { return responce.json(); })
                .catch(error => Observable.throw(error.json()));
        }
        else {
            return this._http.put(this.baseUrl + 'Expenses/PutExpense/' + _expense.expenseID, _expense)
                .map(responce => { return responce.json(); })
                .catch(error => Observable.throw(error.json()));
        }
    }

    removeExpense(id: number) {
        return this._http.delete(this.baseUrl + 'Expenses/DeleteExpense/' + id)
            .map(responce => { return responce.json(); })
            .catch(error => Observable.throw(error.json()));
    }

    //Expense End


}