import { Component } from '@angular/core';
import { UserStoreService } from '../../../services/user-store/user-store.service';
import { CommonModule } from '@angular/common';
import { BudgetListCardComponent } from './budget-list-card/budget-list-card.component';
import { BudgetFormComponent } from '../budget-form/budget-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'budget-display',
  imports: [CommonModule, BudgetListCardComponent, BudgetFormComponent, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './budget-display.component.html',
  styleUrl: './budget-display.component.scss'
})
export class BudgetDisplayComponent {
  displayedColumns: string[] = ['name', 'is-savings', 'current-total', 'percentage', 'buttons']

  constructor(public userStore: UserStoreService) {}
}
