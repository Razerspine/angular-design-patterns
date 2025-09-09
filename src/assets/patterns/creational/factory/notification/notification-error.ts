import {NotificationAbstract} from './notification.abstract';

export class NotificationError extends NotificationAbstract {
  show(): void {
    console.log(`❌ Error: ${this.message}`);
  }
}
