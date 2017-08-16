"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var config_component_1 = require("./config/config.component");
var category_component_1 = require("./category/category.component");
var expense_component_1 = require("./expense/expense.component");
var MAINMENU_ROUTES = [
    { path: '', component: config_component_1.ConfigComponent },
    {
        path: 'config',
        component: config_component_1.ConfigComponent,
        //loadChildren: () => CategoryComponent,
        children: [
            { path: '', redirectTo: '/category', pathMatch: 'full' },
            { path: 'category', outlet: 'sidemenu', component: category_component_1.CategoryComponent },
            { path: 'expense', outlet: 'sidemenu', component: expense_component_1.ExpenseComponent }
        ]
    },
];
exports.CONST_ROUTE = router_1.RouterModule.forRoot(MAINMENU_ROUTES);
//# sourceMappingURL=app.routing.js.map