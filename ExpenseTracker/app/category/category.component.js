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
var CategoryComponent = (function () {
    function CategoryComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.name = "Categories";
        this.submitted = true;
        this.model = { categoryID: 0, categoryName: '', categoryDesc: '' };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        //this.categories = [
        //    { categoryID: 1, categoryName: 'cat 1', categoryDesc: '' },
        //    { categoryID: 1, categoryName: 'cat 2', categoryDesc: '' },
        //    { categoryID: 1, categoryName: 'cat 3', categoryDesc: '' },
        //];
    };
    CategoryComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.saveCategory(this.model);
    };
    CategoryComponent.prototype.addNew = function () {
        this.model = { categoryID: 0, categoryName: '', categoryDesc: '' };
        this.submitted = false;
    };
    CategoryComponent.prototype.edit = function (id) {
        var _this = this;
        this._sharedService.getCategory(id)
            .subscribe(function (result) {
            _this.model = result;
            _this.submitted = false;
        }, function (error) {
            console.log('Error: failed to load categories.');
            console.log(error);
        });
    };
    CategoryComponent.prototype.close = function () {
        this.submitted = true;
    };
    CategoryComponent.prototype.loadCategories = function () {
        var _this = this;
        this._sharedService.getCategories()
            .subscribe(function (result) { _this.categories = result; }, function (error) {
            console.log('Error: failed to load categories.');
            console.log(error);
        });
    };
    CategoryComponent.prototype.saveCategory = function (category) {
        var _this = this;
        this._sharedService.saveCategory(category)
            .subscribe(function (result) {
            if (category.categoryID < 1)
                _this.categories.push(result);
            else {
                var updateItem = _this.categories.find(function (item) { return item.categoryID == category.categoryID; });
                var index = _this.categories.indexOf(updateItem);
                _this.categories[index] = _this.model;
            }
        }, function (error) {
            console.log('Error: failed to load categories.');
            console.log(error);
        });
    };
    CategoryComponent.prototype.remove = function (id) {
        var _this = this;
        this._sharedService.removeCategory(id)
            .subscribe(function (result) {
            var index = _this.categories.indexOf(_this.model, 0);
            _this.categories.splice(index, 1);
        }, function (error) {
            console.log('Error: failed to load categories.');
            console.log(error);
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-category',
            templateUrl: './app/category/category.component.html',
            styleUrls: ['./app/category/category.component.css']
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map