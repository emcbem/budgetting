import { Component } from '@angular/core';
import { UserStoreService } from '../../../services/user-store/user-store.service';
import { CommonModule } from '@angular/common';
import { BudgetListCardComponent } from './budget-list-card/budget-list-card.component';

@Component({
  selector: 'budget-display',
  imports: [CommonModule, BudgetListCardComponent],
  templateUrl: './budget-display.component.html',
  styleUrl: './budget-display.component.css'
})
export class BudgetDisplayComponent {
  constructor(public userStore: UserStoreService) {}
}
