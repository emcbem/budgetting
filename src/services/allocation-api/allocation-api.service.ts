import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStoreService } from '../user-store/user-store.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationApiService {

  constructor(private httpClient: HttpClient, private userStore: UserStoreService) { }

  public SubmitPay(payTotal: number) {
    this.httpClient.post(`${environment.apiUrl}/secured/allocation/submit/${payTotal}`, {})
    .subscribe({
      next: () => {
        this.userStore.refreshUser()
      }
    })
  }
}
