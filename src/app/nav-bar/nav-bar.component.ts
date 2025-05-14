import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'nav-bar',
  imports: [NavLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
