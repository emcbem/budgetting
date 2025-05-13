import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BudgetApiService } from '../../services/budget-api/budget-api.service';
import { BudgetRequest } from '../../data/requests/BudgetRequest';

@Component({
  selector: 'app-budget-page',
  imports: [ReactiveFormsModule],
  templateUrl: './budget-page.component.html',
  styleUrl: './budget-page.component.css'
})
export class BudgetPageComponent {

  constructor(private budgetApi: BudgetApiService) {}
  
  budgetNameControl = new FormControl('');

  public SubmitForm(): void{
    console.log(this.budgetNameControl.value)
    this.budgetApi.CreateUserBudget({name: this.budgetNameControl.value} as BudgetRequest)
    this.budgetNameControl.setValue("")
  }
}
