import { Component, Input, SimpleChanges } from '@angular/core';
import { Budget } from '../../../../data/budget';
import { BudgetApiService } from '../../../../services/budget-api/budget-api.service';
import { UpdateBudgetReqeust } from '../../../../data/requests/Updates/UpdateBudgetRequest';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'budget-list-card',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './budget-list-card.component.html',
  styleUrl: './budget-list-card.component.scss',
  inputs: ['editable', 'budget'],
})
export class BudgetListCardComponent {
  @Input() editable!: boolean;
  @Input() budget!: Budget;
  public updateBudgetRequest: UpdateBudgetReqeust = {percentage: 0} as UpdateBudgetReqeust
  public editing = false;
  public form: FormControl = new FormControl(0)

  constructor(private budgetService: BudgetApiService) {}

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['budget'] && this.budget) {
      this.form.setValue(this.budget.percentage ?? 0);
    }
  }


  public DeleteBudget() {
    this.budgetService.DeleteUserBudget(this.budget.id);
  }

  public UpdateBudget() {
    this.updateBudgetRequest.id = this.budget.id;
    this.updateBudgetRequest.percentage = this.form.value ?? 0
    if(!this.updateBudgetRequest.name)
    {
      this.updateBudgetRequest.name = this.budget.name
    }

    this.budgetService.UpdateUserBudget(this.updateBudgetRequest);
    this.editing = false;
  }
}
