import {Component as NgComponent} from '@angular/core';
import {MediaFacade} from './media-facade';

@NgComponent({
  selector: 'app-facade-pattern',
  standalone: true,
  template: `
    <h2>{{ "Facade" }}</h2>
    <button (click)="playMovie()">
      {{ "Test Facade" }}
    </button>

    <pre>{{ result }}</pre>
  `,
})
export class FacadeComponent {
  result = '';

  playMovie(): void {
    const media = new MediaFacade();
    this.result = media.playMovie('movie.mp4').join('\n');
  }
}
