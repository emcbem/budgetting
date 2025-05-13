import { Injectable } from '@angular/core';
import { BudgetRequest } from '../../data/requests/Adds/BudgetRequest';
import { HttpClient } from '@angular/common/http';
import { UserStoreService } from '../user-store/user-store.service';
import { UpdateBudgetReqeust } from '../../data/requests/Updates/UpdateBudgetRequest';

@Injectable({
  providedIn: 'root',
})
export class BudgetApiService {
  constructor(
    private httpClient: HttpClient,
    private userStore: UserStoreService
  ) {}

  public CreateUserBudget(budgetRequest: BudgetRequest) {
    this.httpClient
      .post('http://localhost:8080/secured/budget/createBudget', budgetRequest)
      .subscribe({
        next: (response) => {
          this.userStore.refreshUser();
          console.log('Budget created', response);
        },
        error: (err) => {
          console.error('Error creating budget', err);
        },
      });
  }

  public DeleteUserBudget(budgetId: number) {
    this.httpClient
      .delete(`http://localhost:8080/secured/budget/deleteBudget/${budgetId}`)
      .subscribe({
        next: (response) => {
          this.userStore.refreshUser();
          console.log('Budget deleted', response);
        },
        error: (err) => {
          console.error('Error deleting budget', err);
        },
      });
  }

  public UpdateUserBudget(updateBudget: UpdateBudgetReqeust) {
    this.httpClient
      .patch('http://localhost:8080/secured/budget/updateBudget', updateBudget)
      .subscribe({
        next: (response) => {
          this.userStore.refreshUser();
          console.log('Budget updated', response);
        },
        error: (err) => {
          console.error('Error updating budget', err);
        },
      });
  }
}
