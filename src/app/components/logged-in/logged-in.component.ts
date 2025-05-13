import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'logged-in',
  imports: [CommonModule],
  templateUrl: './logged-in.component.html',
  styleUrl: './logged-in.component.css'
})
export class LoggedInComponent {
  constructor(public auth: AuthService){}

  show: boolean = false
}
