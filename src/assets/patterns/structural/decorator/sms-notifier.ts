import {NotifierDecorator} from './notifier-decorator';

export class SmsNotifier extends NotifierDecorator {
  send(message: string): string {
    return this.wrappee.send(message) + ` | via SMS`;
  }
}
