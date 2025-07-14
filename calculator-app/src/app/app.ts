import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  displayValue: string = '0';
  currentInput: string = '';
  operator: string | null = null;
  firstOperand: string | null = null;

  handleButtonPress(value: string): void {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.updateDisplay(value);
    }
  }

  private calculateResult(): void {
    try {
      this.displayValue = eval(this.currentInput).toString();
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  private updateDisplay(value: string): void {
    if (this.displayValue === '0' || this.displayValue === 'Error') {
      this.displayValue = value;
    } else {
      this.displayValue += value;
    }
    this.currentInput = this.displayValue;
  }

  private clear(): void {
    this.displayValue = '0';
    this.currentInput = '';
  }
}
