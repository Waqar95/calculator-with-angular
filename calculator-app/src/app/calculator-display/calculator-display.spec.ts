import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDisplay } from './calculator-display';

describe('CalculatorDisplay', () => {
  let component: CalculatorDisplay;
  let fixture: ComponentFixture<CalculatorDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
