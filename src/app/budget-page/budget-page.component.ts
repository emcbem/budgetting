import { Component } from '@angular/core';

import { LoggedInComponent } from '../components/logged-in/logged-in.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetDisplayComponent } from './budget-display/budget-display.component';

@Component({
  selector: 'app-budget-page',
  imports: [LoggedInComponent, BudgetFormComponent, BudgetDisplayComponent],
  templateUrl: './budget-page.component.html',
  styleUrl: './budget-page.component.scss'
})
export class BudgetPageComponent {

}
