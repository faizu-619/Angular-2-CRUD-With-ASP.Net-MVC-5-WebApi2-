import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component'

const MAINMENU_ROUTES: Routes = [
    { path: '', component: ConfigComponent },
    {
        path: 'config',
        component: ConfigComponent,
        //loadChildren: () => CategoryComponent,
        children: [
            { path: '', redirectTo: '/category', pathMatch:'full' },
            { path: 'category', outlet: 'sidemenu', component: CategoryComponent },
            { path: 'expense', outlet: 'sidemenu', component: ExpenseComponent }
        ]
    },
    
];

export const CONST_ROUTE = RouterModule.forRoot(MAINMENU_ROUTES);