import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app'; // Import the root component
import { CalculatorDisplay } from './calculator-display/calculator-display'; // Import the display component
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons'; // Import the buttons component

@NgModule({
  declarations: [
    AppComponent, // Declare the root component
    CalculatorDisplay, // Declare the display component
    CalculatorButtonsComponent, // Declare the buttons component
  ],
  imports: [
    BrowserModule, // Import the necessary Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrapping the root component
})
export class AppModule {}
