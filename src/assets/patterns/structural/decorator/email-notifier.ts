import {NotifierDecorator} from './notifier-decorator';

export class EmailNotifier extends NotifierDecorator {
  send(message: string): string {
    return this.wrappee.send(message) + ` | via Email`;
  }
}
