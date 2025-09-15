import {Strategy} from './strategy';

export class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class SubtractStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class MultiplyStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}
