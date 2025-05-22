import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'nav-bar',
  imports: [NavLinkComponent, LogoComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
