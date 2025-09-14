import {Injectable} from '@angular/core';
import {MessageImplementor} from './message-implementor';

@Injectable({providedIn: 'root'})
export class AlertMessageService implements MessageImplementor {
  showMessage(message: string): void {
    alert('Alert message: ' + message);
  }
}
