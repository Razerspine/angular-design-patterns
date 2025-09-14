import {Component as NgComponent} from '@angular/core';
import {Leaf} from './leaf';
import {Composite} from './composite';

@NgComponent({
  selector: 'app-composite-pattern',
  standalone: true,
  template: `
    <h2>{{ "Composite" }}</h2>
    <button (click)="testComposite()">
      {{ "Test Composite" }}
    </button>
    <pre>{{ result }}</pre>
  `,
})
export class CompositeComponent {
  result = '';

  testComposite(): void {
    const leaf1 = new Leaf('A');
    const leaf2 = new Leaf('B');
    const leaf3 = new Leaf('C');

    const composite1 = new Composite();
    composite1.add(leaf1);
    composite1.add(leaf2);

    const composite2 = new Composite();
    composite2.add(composite1);
    composite2.add(leaf3);

    this.result = composite2.operation();
  }
}
