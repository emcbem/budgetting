import { Routes } from '@angular/router';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { AllocationPageComponent } from './allocation-page/allocation-page.component';

export const routes: Routes = [
    {path: 'budget', component: BudgetPageComponent},
    {path: 'allocate', component: AllocationPageComponent}
];
