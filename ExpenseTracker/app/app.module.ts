import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConfigComponent } from './config/config.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoriesDropdown } from './category/category-dropdown.component';
import { TransactionTypes } from './transactiontype.dropdown';
import { CONST_ROUTE } from './app.routing';
import { SharedService } from './shared.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DateTimePickerModule,
        CONST_ROUTE
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        ConfigComponent,
        CategoryComponent,
        ExpenseComponent,
        CategoriesDropdown,
        TransactionTypes,
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
