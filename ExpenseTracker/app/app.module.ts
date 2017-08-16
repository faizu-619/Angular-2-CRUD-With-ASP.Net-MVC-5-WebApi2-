import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConfigComponent } from './config/config.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { CONST_ROUTE } from './app.routing';
import { SharedService } from './shared.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CONST_ROUTE
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        ConfigComponent,
        CategoryComponent,
        ExpenseComponent
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
