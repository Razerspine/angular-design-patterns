import {Strategy} from './strategy';

export class CalculatorContext {
  private strategy!: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  calculate(a: number, b: number): number {
    if (!this.strategy) {
      throw new Error('Strategy is not set');
    }
    return this.strategy.execute(a, b);
  }
}
