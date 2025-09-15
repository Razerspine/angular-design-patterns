import {Component as NgComponent} from '@angular/core';
import {CalculatorContext} from './context';
import {AddStrategy, SubtractStrategy, MultiplyStrategy} from './concrete-strategies';

@NgComponent({
  selector: 'app-strategy-pattern',
  standalone: true,
  template: `
    <h2>{{ "Strategy" }}</h2>

    <button (click)="useAdd()">{{ "Add" }}</button>
    <button (click)="useSubtract()">{{ "Subtract" }}</button>
    <button (click)="useMultiply()">{{ "Multiply" }}</button>

    <p>{{ result }}</p>
  `,
})
export class StrategyComponent {
  private calculator = new CalculatorContext();
  result: number = 0;

  useAdd(): void {
    this.calculator.setStrategy(new AddStrategy());
    this.result = this.calculator.calculate(10, 5);
  }

  useSubtract(): void {
    this.calculator.setStrategy(new SubtractStrategy());
    this.result = this.calculator.calculate(10, 5);
  }

  useMultiply(): void {
    this.calculator.setStrategy(new MultiplyStrategy());
    this.result = this.calculator.calculate(10, 5);
  }
}
