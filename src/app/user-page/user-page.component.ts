import { Component } from '@angular/core';
import { AuthButtonComponent } from '../authentication/auth_button.component';
import { UserProfileComponent } from '../authentication/auth_user_profile.component';

@Component({
  selector: 'user-page',
  imports: [AuthButtonComponent, UserProfileComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {

}
