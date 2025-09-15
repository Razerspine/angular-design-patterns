import {Component as NgComponent} from '@angular/core';
import {Originator} from './originator';
import {Caretaker} from './caretaker';

@NgComponent({
  selector: 'app-memento-pattern',
  standalone: true,
  template: `
    <h2>{{ "Memento" }}</h2>
    <button (click)="runExample()">{{ "Action" }}</button>
  `,
})
export class MementoComponent {
  runExample(): void {
    const originator = new Originator();
    const caretaker = new Caretaker();

    originator.setState('State #1');
    caretaker.addMemento(originator.save());

    originator.setState('State #2');
    caretaker.addMemento(originator.save());

    originator.setState('State #3');
    console.log('Current state changed to "State #3"');

    originator.restore(caretaker.getMemento(0));
    originator.restore(caretaker.getMemento(1));
  }
}
