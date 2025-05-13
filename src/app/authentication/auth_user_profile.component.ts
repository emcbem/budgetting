import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '../../services/user-api/user-api.service';
import { Observable } from 'rxjs';
import { User } from '../../data/user';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  template: ` <ul *ngIf="user$ | async as user">
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
  </ul>`,
  standalone: true,
})
export class UserProfileComponent {
  public user$: Observable<User>;
  constructor(private auth: UserApiService) {
    this.user$ = auth.getUser();
  }
}
