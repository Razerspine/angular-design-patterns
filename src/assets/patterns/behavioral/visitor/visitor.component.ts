import {Component as NgComponent} from '@angular/core';
import {Book, Movie} from './elements';
import {PriceVisitor, RatingVisitor} from './concrete-visitors';

@NgComponent({
  selector: 'app-visitor-pattern',
  standalone: true,
  template: `
    <h2>{{ "Visitor" }}</h2>

    <button (click)="showPrices()">{{ "Show Prices" }}</button>
    <button (click)="showRatings()">{{ "Show Ratings" }}</button>

    <p>{{ "Result: " }}</p>
    <ul>
        @for(log of logs; track log) {
              <li>{{ log }}</li>
        }
    </ul>
  `,
})
export class VisitorComponent {
  logs: string[] = [];
  private items = [
    new Book('Design Patterns', 40),
    new Movie('Inception', 9),
  ];

  showPrices(): void {
    this.logs = [];
    const visitor = new PriceVisitor();
    console.log = (msg: string) => this.logs.push(msg);
    this.items.forEach(item => item.accept(visitor));
  }

  showRatings(): void {
    this.logs = [];
    const visitor = new RatingVisitor();
    console.log = (msg: string) => this.logs.push(msg);
    this.items.forEach(item => item.accept(visitor));
  }
}
