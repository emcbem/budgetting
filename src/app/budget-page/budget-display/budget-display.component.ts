import { Component } from '@angular/core';
import { UserStoreService } from '../../../services/user-store/user-store.service';
import { CommonModule } from '@angular/common';
import { BudgetListCardComponent } from './budget-list-card/budget-list-card.component';
import { BudgetFormComponent } from '../budget-form/budget-form.component';

@Component({
  selector: 'budget-display',
  imports: [CommonModule, BudgetListCardComponent, BudgetFormComponent],
  templateUrl: './budget-display.component.html',
  styleUrl: './budget-display.component.scss'
})
export class BudgetDisplayComponent {
  constructor(public userStore: UserStoreService) {}
}
