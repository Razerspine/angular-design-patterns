import {Component as NgComponent} from '@angular/core';
import {CharacterFactory} from './character-factory';

@NgComponent({
  selector: 'app-flyweight-pattern',
  standalone: true,
  template: `
    <h2>{{ "Flyweight" }}</h2>
    <button (click)="generateText()">
      {{ "Test Flyweight" }}
    </button>

    <pre>{{ result }}</pre>
  `,
})
export class FlyweightComponent {
  result = '';

  generateText(): void {
    const factory = new CharacterFactory();
    const text = 'hello flyweight';
    let output: string[] = [];

    for (let i = 0; i < text.length; i++) {
      const char = factory.getCharacter(text[i], 'Arial');
      output.push(char.display(i));
    }

    output.push(`\nTotal unique flyweights: ${factory.getCount()}`);
    this.result = output.join('\n');
  }
}
