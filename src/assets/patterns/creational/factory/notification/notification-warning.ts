import {NotificationAbstract} from './notification.abstract';

export class NotificationWarning extends NotificationAbstract {
  show(): void {
    console.log(`⚠️ Warning: ${this.message}`);
  }
}
