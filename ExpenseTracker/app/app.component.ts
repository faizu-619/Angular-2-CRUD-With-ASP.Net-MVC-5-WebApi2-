import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls: [`./app/app.component.css`]
})
export class AppComponent  {
    appName = "Expense Tracker";
    currentYear = Date.now();
}
