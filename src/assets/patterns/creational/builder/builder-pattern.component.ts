import {Component} from '@angular/core';
import {SimpleCardBuilder} from './simple-card-builder';
import {CardDirector} from './card-director';
import {Card} from './card.model';

@Component({
  selector: 'app-builder-pattern',
  standalone: true,
  template: `
    <h2>Builder Pattern Example</h2>
    <div class="card">
      <img [src]="card.image" alt="card image"/>
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
      <button>{{ card.button }}</button>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      padding: 16px;
      width: 250px;
      border-radius: 8px;
      text-align: center;
    }

    img {
      max-width: 100%;
      border-radius: 6px;
    }

    button {
      margin-top: 8px;
      padding: 6px 12px;
      border: none;
      background: #1976d2;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class BuilderPatternComponent {
  card: Card;

  constructor() {
    const builder = new SimpleCardBuilder();
    const director = new CardDirector(builder);
    this.card = director.buildProductCard();
  }
}
