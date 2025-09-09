import {NotificationFactoryService, NotificationType} from './notification-factory.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-factory-pattern',
  standalone: true,
  template: `
    <h2>Factory Pattern Example</h2>
    <button (click)="notify('success')">Show Success</button>
    <button (click)="notify('error')">Show Error</button>
    <button (click)="notify('warning')">Show Warning</button>
  `,
})
export class FactoryPatternComponent {
  constructor(private factory: NotificationFactoryService) {
  }

  notify(type: NotificationType): void {
    const notification = this.factory.create(type, `Message for ${type}`);
    notification.show();
  }
}
