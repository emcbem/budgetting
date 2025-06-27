import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'nav-link',
  inputs: ['href', 'title'],
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input() href!: string;
  @Input() title!: string;

  constructor(public router: Router) {}

  public isActive(): boolean {
    return this.router.url.split('?')[0] === this.normalizedHref;
  }

  get normalizedHref(): string {
    return this.href.startsWith('/') ? this.href : `/${this.href}`;
  }
}
