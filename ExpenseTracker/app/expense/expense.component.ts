import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
//import { ICategory } from './../models/category';

@Component({
    selector: 'app-expense',
    templateUrl: './app/expense/expense.component.html',
    styleUrls: ['./app/expense/expense.component.css']
})
export class ExpenseComponent implements OnInit {
    //categories: ICategory[];
    name = "Expenses";

    constructor(private _sharedService: SharedService) {

    }

    ngOnInit() {
        
        //this.loadCategories();
    }

    //loadCategories() {
    //    this._sharedService.getCategories()
    //        .subscribe(result => { this.categories = result; },
    //        error => {
    //            console.log('Error: failed to load categories.')
    //            console.log(error);
    //        }
    //        );
    //}
}