import { Routes } from '@angular/router';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { AllocationPageComponent } from './allocation-page/allocation-page.component';
import { AiBudgetPageComponent } from './ai-budget-page/ai-budget-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path: 'budget', component: BudgetPageComponent},
    {path: 'allocate', component: AllocationPageComponent},
    {path: 'ai-budget', component: AiBudgetPageComponent},
    {path: 'account', component: UserPageComponent, canActivate: [AuthGuard]}
];
