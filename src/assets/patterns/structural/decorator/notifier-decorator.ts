import {Notifier} from './notifier.interface';

export abstract class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {
  }

  abstract send(message: string): string;
}
