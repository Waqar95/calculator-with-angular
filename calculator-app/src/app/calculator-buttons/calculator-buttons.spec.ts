import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButtons } from './calculator-buttons';

describe('CalculatorButtons', () => {
  let component: CalculatorButtons;
  let fixture: ComponentFixture<CalculatorButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
