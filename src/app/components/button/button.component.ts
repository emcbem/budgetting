import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() ClickEvent = new EventEmitter<void>();  
  @Input() ButtonInnards: string = "";

  public ButtonClicked()
  {
    this.ClickEvent.emit()
  }
}
