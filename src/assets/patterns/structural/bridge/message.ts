import {MessageImplementor} from './message-implementor';

export abstract class Message {
  constructor(protected implementor: MessageImplementor) {
  }

  abstract send(content: string): void;
}
