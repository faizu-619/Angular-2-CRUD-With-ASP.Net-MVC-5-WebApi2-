import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { IExpense } from './../models/expense';

@Component({
    selector: 'app-expense',
    templateUrl: './app/expense/expense.component.html',
    styleUrls: ['./app/expense/expense.component.css']
})
export class ExpenseComponent implements OnInit {
    //expenses: IExpense[];
    name = "Expenses";
    expenses: IExpense[];
    submitted = true;
    model: IExpense = { expenseID: 0, expenseAmount: 0, expenseDate: '', expenseDesc: '', categoryID: 0, categoryName: '', transactionType: '' };

    constructor(private _sharedService: SharedService) {

    }

    ngOnInit() {
        this.loadExpenses();
    }

    onSubmit() {
        this.submitted = true;
        this.saveExpense(this.model);
    }

    addNew() {
        this.model = { expenseID: 0, expenseAmount: 0, expenseDate: '', expenseDesc: '', categoryID: 0, categoryName: '', transactionType: '' };
        this.submitted = false;
    }

    edit(id: number) {
        this._sharedService.getExpense(id)
            .subscribe(result => {
                this.model = result;
                this.submitted = false;
            },
            error => {
                console.log('Error: failed to load expenses.')
                console.log(error);
            });
    }

    close() {
        this.submitted = true;
    }

    loadExpenses() {
        this._sharedService.getExpenses()
            .subscribe(result => { this.expenses = result; },
            error => {
                console.log('Error: failed to load expenses.')
                console.log(error);
            });
    }

    saveExpense(expense: IExpense) {
        this._sharedService.saveExpense(expense)
            .subscribe(result => {
                if (expense.expenseID < 1)
                    this.expenses.push(result);
                else {
                    let updateItem = this.expenses.find(item => item.expenseID == expense.expenseID);

                    let index = this.expenses.indexOf(updateItem);

                    this.expenses[index] = this.model;
                }
            },
            error => {
                console.log('Error: failed to load expenses.')
                console.log(error);
            });
    }

    remove(id: number) {
        this._sharedService.removeExpense(id)
            .subscribe(result => {
                var index = this.expenses.indexOf(this.model, 0);
                this.expenses.splice(index, 1);
            },
            error => {
                console.log('Error: failed to load expenses.')
                console.log(error);
            });
    }
}