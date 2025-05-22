import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'auth-button',
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="LogIn()">Log in</button>
    </ng-template>
  `,
  standalone: true
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  public LogIn()
  {
    this.auth.loginWithRedirect({appState: {target: window.location.href}})
  }
}