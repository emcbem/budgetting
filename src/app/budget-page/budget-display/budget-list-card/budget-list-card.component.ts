import { Component, Input } from '@angular/core';
import { Budget } from '../../../../data/budget';
import { BudgetApiService } from '../../../../services/budget-api/budget-api.service';
import { UpdateBudgetReqeust } from '../../../../data/requests/Updates/UpdateBudgetRequest';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'budget-list-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './budget-list-card.component.html',
  styleUrl: './budget-list-card.component.css',
  inputs: ['editable', 'budget'],
})
export class BudgetListCardComponent {
  @Input() editable!: boolean;
  @Input() budget!: Budget;
  public updateBudgetRequest: UpdateBudgetReqeust = {percentage: 0} as UpdateBudgetReqeust
  public editing = false;


  constructor(private budgetService: BudgetApiService) {
    console.log(this.budget)
  }

  public DeleteBudget() {
    this.budgetService.DeleteUserBudget(this.budget.id);
  }

  public UpdateBudget() {
    this.updateBudgetRequest.id = this.budget.id;

    if(!this.updateBudgetRequest.name)
    {
      this.updateBudgetRequest.name = this.budget.name
    }

    this.budgetService.UpdateUserBudget(this.updateBudgetRequest);
    this.editing = false;
  }
}
