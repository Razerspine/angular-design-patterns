import {Component as NgComponent} from '@angular/core';
import {Subject} from './subject';
import {ConcreteObserver} from './concrete-observer';

@NgComponent({
  selector: 'app-observer-pattern',
  standalone: true,
  template: `
    <h2>{{ "Observer" }}</h2>

    <button (click)="runExample()">{{ "Run Example" }}</button>
  `,
})
export class ObserverComponent {
  runExample(): void {
    const subject = new Subject();

    const observer1 = new ConcreteObserver('Observer A');
    const observer2 = new ConcreteObserver('Observer B');

    subject.attach(observer1);
    subject.attach(observer2);

    subject.setState('First Update');
    subject.setState('Second Update');

    subject.detach(observer1);

    subject.setState('Third Update');
  }
}
