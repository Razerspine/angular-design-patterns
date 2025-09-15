import {Component as NgComponent} from '@angular/core';
import {NameCollection} from './collection';

@NgComponent({
  selector: 'app-iterator-pattern',
  standalone: true,
  template: `
    <h2>{{ "Iterator" }}</h2>

    <button (click)="iterate()">{{ "Action" }}</button>

    <ul>
        @for(item of items; track item) {
            <li>{{ item }}</li>
        }
    </ul>
  `,
})
export class IteratorComponent {
  items: string[] = [];

  iterate(): void {
    const collection = new NameCollection();
    collection.addName('Alice');
    collection.addName('Bob');
    collection.addName('Charlie');

    const iterator = collection.createIterator();
    this.items = [];

    while (iterator.hasNext()) {
      const name = iterator.next();
      if (name) {
        this.items.push(name);
      }
    }
  }
}
