import {Notifier} from './notifier.interface';

export class BasicNotifier implements Notifier {
  send(message: string): string {
    return `Basic notification: ${message}`;
  }
}
