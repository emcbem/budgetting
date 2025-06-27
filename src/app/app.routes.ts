import { Routes } from '@angular/router';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { AllocationPageComponent } from './allocation-page/allocation-page.component';
import { AiBudgetPageComponent } from './ai-budget-page/ai-budget-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path: 'budget', component: BudgetPageComponent, canActivate: [AuthGuard]},
    {path: 'allocate', component: AllocationPageComponent, canActivate: [AuthGuard]},
    {path: 'ai-budget', component: AiBudgetPageComponent, canActivate: [AuthGuard]},
    {path: 'account', component: UserPageComponent, canActivate: [AuthGuard]}
];
