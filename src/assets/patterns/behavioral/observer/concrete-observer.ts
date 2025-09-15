import {Observer} from './observer';

export class ConcreteObserver implements Observer {
  constructor(private name: string) {
  }

  update(state: string): void {
    console.log(`Observer "${this.name}" received new state: ${state}`);
  }
}
