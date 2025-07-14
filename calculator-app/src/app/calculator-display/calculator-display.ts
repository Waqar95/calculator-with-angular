import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.html',
  styleUrls: ['./calculator-display.css'],
})
export class CalculatorDisplayComponent {
  @Input() displayValue: string = '0'; // Default value for the display
}
