import {Component as NgComponent} from '@angular/core';
import {VideoServiceProxy} from './video-service-proxy';

@NgComponent({
  selector: 'app-proxy-pattern',
  standalone: true,
  template: `
    <h2>{{ "Proxy" }}</h2>

    <button (click)="playVideo('abc123')">
      {{ "Play" }}
    </button>
    <button (click)="playVideo('xyz456')">
      {{ "Play Another" }}
    </button>
    <button (click)="playVideo('abc123')">
      {{ "Play Cached" }}
    </button>

    <pre>{{ result }}</pre>
  `,
})
export class ProxyComponent {
  result = '';
  private service = new VideoServiceProxy();

  playVideo(id: string): void {
    this.result = this.service.playVideo(id);
  }
}
