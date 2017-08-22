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
//@Directive({
//    selector: 'categories-control',
//    exportAs:'category-dropdown'
//    //outputs:['']
//})
//export class categoryDropdown {
//}
var CategoriesDropdown = (function () {
    function CategoriesDropdown(_sharedService) {
        this._sharedService = _sharedService;
        this.onSelected = new core_1.EventEmitter();
    }
    CategoriesDropdown.prototype.onChange = function (selectedValue) {
        console.log(this.selectedValue);
        this.onSelected.emit(this.selectedValue);
    };
    CategoriesDropdown.prototype.ngOnInit = function () {
        this.LoadCategories();
    };
    CategoriesDropdown.prototype.LoadCategories = function () {
        var _this = this;
        this._sharedService.getCategories()
            .subscribe(function (result) { _this.categories = result; }, function (error) {
            console.log('Error: failed to load categories.');
            console.log(error);
        });
    };
    Object.defineProperty(CategoriesDropdown.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.selectedValue); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CategoriesDropdown.prototype, "onSelected", void 0);
    CategoriesDropdown = __decorate([
        core_1.Component({
            selector: 'category-dropdown',
            template: '{{diagnostic}}<select class="form-control" [(ngModel)]="selectedValue" required (change)="onChange($event)"><option *ngFor="let category of categories" [value]="category.categoryID" > {{category.categoryName }}</option></select>'
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], CategoriesDropdown);
    return CategoriesDropdown;
}());
exports.CategoriesDropdown = CategoriesDropdown;
//# sourceMappingURL=category-dropdown.component.js.map