import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { BudgetApiService } from '../../../../services/budget-api/budget-api.service';
import { BudgetRequest } from '../../../../data/requests/Adds/BudgetRequest';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-budget-form-dialog',
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatButton
  ],
  templateUrl: './budget-form-dialog.component.html',
  styleUrl: './budget-form-dialog.component.scss'
})
export class BudgetFormDialogComponent {
  readonly dialogRef = inject(MatDialogRef<BudgetFormDialogComponent>);

  constructor (private budgetApi: BudgetApiService) {}
  public budgetNameControl = new FormControl('');


  onCancel(): void {
    this.dialogRef.close();
  }

  public SubmitForm(): void {
      this.budgetApi.CreateUserBudget({
        name: this.budgetNameControl.value,
      } as BudgetRequest);
      this.budgetNameControl.setValue('');
      this.dialogRef.close();
    }
  
}
