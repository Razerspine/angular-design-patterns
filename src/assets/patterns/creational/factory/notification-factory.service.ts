import {Injectable} from '@angular/core';
import {NotificationAbstract} from './notification/notification.abstract';
import {NotificationSuccess} from './notification/notification-success';
import {NotificationError} from './notification/notification-error';
import {NotificationWarning} from './notification/notification-warning';

export type NotificationType = 'success' | 'error' | 'warning';

@Injectable({
  providedIn: 'root',
})
export class NotificationFactoryService {
  create(type: NotificationType, message: string): NotificationAbstract {
    switch (type) {
      case 'success':
        return new NotificationSuccess(message);
      case 'error':
        return new NotificationError(message);
      case 'warning':
        return new NotificationWarning(message);
      default:
        throw new Error('Unknown notification type');
    }
  }
}
