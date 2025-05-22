import { Component } from '@angular/core';
import { AuthButtonComponent } from '../authentication/auth_button.component';

@Component({
  selector: 'user-page',
  imports: [AuthButtonComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
