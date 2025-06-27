import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetApiService } from '../../services/budget-api/budget-api.service';
import { Observable } from 'rxjs';
import { AiBudgetRequest } from '../../data/Ai/ai-budget-request';

@Component({
  selector: 'app-ai-budget-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-budget-page.component.html',
  styleUrl: './ai-budget-page.component.scss'
})
export class AiBudgetPageComponent {
  userConcerns:string = '';
  aiResponse$!: Observable<AiBudgetRequest>;
  newestAiResponse!: AiBudgetRequest
  isLoadingAiResponse = false

  constructor(private budgetService: BudgetApiService) {  }

  public GetAiResponse()
  {
    this.aiResponse$ = this.budgetService.GetAiBudgetRequestObservable(this.userConcerns)
    this.aiResponse$.subscribe({next: (value) => this.newestAiResponse = value})
  }

  public AcceptAiResponse()
  {
    this.isLoadingAiResponse = true
    this.budgetService.AcceptAiResponse(this.newestAiResponse).subscribe({complete: () => this.isLoadingAiResponse = false});
  }
}
