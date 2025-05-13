import { Injectable } from '@angular/core';
import { BudgetRequest } from '../../data/requests/BudgetRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetApiService {
  constructor(private httpClient: HttpClient) { }

  public CreateUserBudget(budgetRequest: BudgetRequest) {
     return this.httpClient.post('http://localhost:8080/secured/budget/createNewBudget', budgetRequest);
  }
}
