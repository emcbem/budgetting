import { Component } from '@angular/core';
import { UserStoreService } from '../../../services/user-store/user-store.service';
import { CommonModule } from '@angular/common';
import { BudgetListCardComponent } from './budget-list-card/budget-list-card.component';
import { BudgetFormComponent } from '../budget-form/budget-form.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomFormModule } from '../../form-module';

@Component({
  selector: 'budget-display',
  imports: [CommonModule, BudgetFormComponent, CustomFormModule],
  templateUrl: './budget-display.component.html',
  styleUrl: './budget-display.component.scss'
})
export class BudgetDisplayComponent {
  displayedColumns: string[] = ['name', 'isSavings', 'percentage', 'currentTotal', 'buttons']
  dataSource = new MatTableDataSource<any>();
  BudgetForm: FormGroup;

  constructor(public userStore: UserStoreService, private fb: FormBuilder) {
    this.BudgetForm = this.fb.group({})

    this.userStore.user$.subscribe((value) => {
      this.BudgetForm = this.fb.group({
      BudgetRows: this.fb.array(value?.budgets.map(budget => this.fb.group({
        name: new FormControl(budget.name),
        isSavings: new FormControl(budget.isSavings),
        percentage: new FormControl(budget.percentage),
        currentTotal: new FormControl(budget.currentTotal),
        })) ?? [])
      })
      console.log(value?.budgets)
      this.dataSource = new MatTableDataSource((this.BudgetForm.get('BudgetRows') as FormArray).controls)
    })
  }


  ngOnInit() {
    
  }
}
