import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { ICategory } from './../models/category';

@Component({
    selector: 'app-category',
    templateUrl: './app/category/category.component.html',
    styleUrls: ['./app/category/category.component.css']
})
export class CategoryComponent implements OnInit {
    name = "Categories";
    categories: ICategory[];
    submitted = true;
    model: ICategory = { categoryID: 0, categoryName: '', categoryDesc: '' };

    constructor(private _sharedService: SharedService) {

    }

    ngOnInit() {
        this.loadCategories();
        //this.categories = [
        //    { categoryID: 1, categoryName: 'cat 1', categoryDesc: '' },
        //    { categoryID: 1, categoryName: 'cat 2', categoryDesc: '' },
        //    { categoryID: 1, categoryName: 'cat 3', categoryDesc: '' },
        //];
    }

    onSubmit() {
        this.submitted = true;
        this.saveCategory(this.model);
    }

    addNew() {
        this.model = { categoryID: 0, categoryName: '', categoryDesc: '' };
        this.submitted = false;
    }

    edit(id: number) {
        this._sharedService.getCategory(id)
            .subscribe(result =>
            {
                this.model = result;
                this.submitted = false;
            },
            error => {
                console.log('Error: failed to load categories.')
                console.log(error);
            });
    }

    close() {
        this.submitted = true;
    }

    loadCategories() {
        this._sharedService.getCategories()
            .subscribe(result => { this.categories = result; },
            error => {
                console.log('Error: failed to load categories.')
                console.log(error);
            });
    }

    saveCategory(category: ICategory) {
        this._sharedService.saveCategory(category)
            .subscribe(result =>
            {
                if (category.categoryID < 1)
                    this.categories.push(result);
                else
                {
                    let updateItem = this.categories.find(item => item.categoryID == category.categoryID);

                    let index = this.categories.indexOf(updateItem);

                    this.categories[index] = this.model;
                }
            },
            error => {
                console.log('Error: failed to load categories.')
                console.log(error);
            });
    }

    remove(id: number) {
        this._sharedService.removeCategory(id)
            .subscribe(result =>
            {
                var index = this.categories.indexOf(this.model, 0);
                this.categories.splice(index, 1);
            },
            error => {
                console.log('Error: failed to load categories.')
                console.log(error);
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}