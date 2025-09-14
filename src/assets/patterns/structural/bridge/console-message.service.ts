import {Injectable} from '@angular/core';
import {MessageImplementor} from './message-implementor';

@Injectable({providedIn: 'root'})
export class ConsoleMessageService implements MessageImplementor {
  showMessage(message: string): void {
    console.log('Console message:', message);
  }
}
