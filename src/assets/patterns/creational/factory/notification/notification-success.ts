import {NotificationAbstract} from './notification.abstract';

export class NotificationSuccess extends NotificationAbstract {
  show(): void {
    console.log(`✅ Success: ${this.message}`);
  }
}
