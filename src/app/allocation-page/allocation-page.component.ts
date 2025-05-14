import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllocationApiService } from '../../services/allocation-api/allocation-api.service';

@Component({
  selector: 'allocation-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './allocation-page.component.html',
  styleUrl: './allocation-page.component.css'
})
export class AllocationPageComponent {
  totalPay: number = 0

  constructor(private allocationService: AllocationApiService) {}

  public SubmitPay()
  {
    console.log(this.totalPay)
    this.allocationService.SubmitPay(this.totalPay)
  }
}
