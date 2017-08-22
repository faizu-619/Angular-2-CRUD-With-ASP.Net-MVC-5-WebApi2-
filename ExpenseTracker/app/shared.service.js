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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
        this.baseUrl = "api/";
    }
    //Category Start
    SharedService.prototype.getCategories = function () {
        return this._http.get(this.baseUrl + 'Categories/GetCategories')
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.getCategory = function (id) {
        return this._http.get(this.baseUrl + 'Categories/GetCategory/' + id)
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.saveCategory = function (_category) {
        if (_category.categoryID < 1) {
            return this._http.post(this.baseUrl + 'Categories/PostCategory', _category)
                .map(function (responce) { return responce.json(); })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
        else {
            return this._http.put(this.baseUrl + 'Categories/PutCategory/' + _category.categoryID, _category)
                .map(function (responce) { return responce.json(); })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
    };
    SharedService.prototype.removeCategory = function (id) {
        return this._http.delete(this.baseUrl + 'Categories/DeleteCategory/' + id)
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    //Category End
    //Expense Start
    SharedService.prototype.getExpenses = function () {
        return this._http.get(this.baseUrl + 'Expenses/GetExpenses')
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.getExpense = function (id) {
        return this._http.get(this.baseUrl + 'Expenses/GetExpense/' + id)
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.saveExpense = function (_expense) {
        if (_expense.expenseID < 1) {
            return this._http.post(this.baseUrl + 'Expenses/PostExpense', _expense)
                .map(function (responce) { return responce.json(); })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
        else {
            return this._http.put(this.baseUrl + 'Expenses/PutExpense/' + _expense.expenseID, _expense)
                .map(function (responce) { return responce.json(); })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
    };
    SharedService.prototype.removeExpense = function (id) {
        return this._http.delete(this.baseUrl + 'Expenses/DeleteExpense/' + id)
            .map(function (responce) { return responce.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map