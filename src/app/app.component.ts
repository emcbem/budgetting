import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomFormModule } from './form-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CustomFormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budgetting';
}
