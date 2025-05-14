import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStoreService } from '../user-store/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AllocationApiService {

  constructor(private httpClient: HttpClient, private userStore: UserStoreService) { }

  public SubmitPay(payTotal: number) {
    this.httpClient.post(`http://localhost:8080/secured/allocation/submit/${payTotal}`, {})
    .subscribe({
      next: () => {
        this.userStore.refreshUser()
      }
    })
  }
}
