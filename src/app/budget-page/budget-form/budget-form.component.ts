import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BudgetApiService } from '../../../services/budget-api/budget-api.service';
import { BudgetRequest } from '../../../data/requests/Adds/BudgetRequest';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'budget-form',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent {
  constructor(private budgetApi: BudgetApiService) {}

  budgetNameControl = new FormControl('');

  public SubmitForm(): void {
    this.budgetApi.CreateUserBudget({
      name: this.budgetNameControl.value,
    } as BudgetRequest);
    console.log(this.budgetNameControl.value);
    this.budgetNameControl.setValue('');
  }
}
