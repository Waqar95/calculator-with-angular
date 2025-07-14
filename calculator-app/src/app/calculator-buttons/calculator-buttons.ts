import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.html', // Corrected path
  styleUrls: ['./calculator-buttons.css'],
})
export class CalculatorButtonsComponent {
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];

  @Output() buttonPressed = new EventEmitter<string>();

  onButtonClick(button: string) {
    this.buttonPressed.emit(button);
  }
}
