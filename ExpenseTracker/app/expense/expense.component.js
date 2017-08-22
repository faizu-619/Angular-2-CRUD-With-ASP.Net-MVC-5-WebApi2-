"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_service_1 = require("./../shared.service");
var ExpenseComponent = (function () {
    function ExpenseComponent(_sharedService) {
        this._sharedService = _sharedService;
        //expenses: IExpense[];
        this.name = "Expenses";
        this.submitted = true;
        this.model = { expenseID: 0, expenseAmount: 0, expenseDate: '', expenseDesc: '', categoryID: 0, categoryName: '', transactionType: '' };
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        this.loadExpenses();
    };
    ExpenseComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.saveExpense(this.model);
    };
    ExpenseComponent.prototype.addNew = function () {
        this.model = { expenseID: 0, expenseAmount: 0, expenseDate: '', expenseDesc: '', categoryID: 0, categoryName: '', transactionType: '' };
        this.submitted = false;
    };
    ExpenseComponent.prototype.edit = function (id) {
        var _this = this;
        this._sharedService.getExpense(id)
            .subscribe(function (result) {
            _this.model = result;
            _this.submitted = false;
        }, function (error) {
            console.log('Error: failed to load expenses.');
            console.log(error);
        });
    };
    ExpenseComponent.prototype.close = function () {
        this.submitted = true;
    };
    ExpenseComponent.prototype.loadExpenses = function () {
        var _this = this;
        this._sharedService.getExpenses()
            .subscribe(function (result) { _this.expenses = result; }, function (error) {
            console.log('Error: failed to load expenses.');
            console.log(error);
        });
    };
    ExpenseComponent.prototype.saveExpense = function (expense) {
        var _this = this;
        this._sharedService.saveExpense(expense)
            .subscribe(function (result) {
            if (expense.expenseID < 1)
                _this.expenses.push(result);
            else {
                var updateItem = _this.expenses.find(function (item) { return item.expenseID == expense.expenseID; });
                var index = _this.expenses.indexOf(updateItem);
                _this.expenses[index] = _this.model;
            }
        }, function (error) {
            console.log('Error: failed to load expenses.');
            console.log(error);
        });
    };
    ExpenseComponent.prototype.remove = function (id) {
        var _this = this;
        this._sharedService.removeExpense(id)
            .subscribe(function (result) {
            var index = _this.expenses.indexOf(_this.model, 0);
            _this.expenses.splice(index, 1);
        }, function (error) {
            console.log('Error: failed to load expenses.');
            console.log(error);
        });
    };
    ExpenseComponent.prototype.getSelectedCategory = function (selectedValue) {
        this.model.categoryID = selectedValue;
    };
    Object.defineProperty(ExpenseComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ExpenseComponent = __decorate([
        core_1.Component({
            selector: 'app-expense',
            templateUrl: './app/expense/expense.component.html',
            styleUrls: ['./app/expense/expense.component.css']
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], ExpenseComponent);
    return ExpenseComponent;
}());
exports.ExpenseComponent = ExpenseComponent;
//# sourceMappingURL=expense.component.js.map