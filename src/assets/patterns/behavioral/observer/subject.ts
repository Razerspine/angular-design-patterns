import {Observer} from './observer';

export class Subject {
  private observers: Observer[] = [];
  private state!: string;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setState(state: string): void {
    console.log(`Subject: state changed to "${state}"`);
    this.state = state;
    this.notify();
  }

  private notify(): void {
    console.log('Subject: notifying observers...');
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}
