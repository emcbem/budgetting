import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetFormDialogComponent } from './budget-form-dialog/budget-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'budget-form',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss',
})
export class BudgetFormComponent {
  constructor(private dialog: MatDialog){}

  public AddNew(): void {
    const dialogRef = this.dialog.open(BudgetFormDialogComponent, {})
  }
}
