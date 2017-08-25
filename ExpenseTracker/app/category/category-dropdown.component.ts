import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SharedService } from './../shared.service';
import { ICategory } from './../models/category';

//@Directive({
//    selector: 'categories-control',
//    exportAs:'category-dropdown'
//    //outputs:['']
//})
//export class categoryDropdown {
//}

@Component({
    selector: 'category-dropdown',
    template: '{{diagnostic}}<select class="form-control" [(ngModel)]="selectedValue" required (change)="onChange($event)"><option *ngFor="let category of categories" [value]="category.categoryID" > {{category.categoryName }}</option></select>'
})
export class CategoriesDropdown implements OnInit {
    categories: ICategory[];
    @Input() selectedValue: string;
    @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _sharedService: SharedService) {
    }

    onChange(selectedValue: any): void {
        console.log(this.selectedValue);
        this.onSelected.emit(this.selectedValue);
    }

    ngOnInit() {
        this.LoadCategories();
    }

    LoadCategories() {
        this._sharedService.getCategories()
            .subscribe(result => { this.categories = result; },
            error => {
                console.log('Error: failed to load categories.')
                console.log(error);
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.selectedValue); }
}