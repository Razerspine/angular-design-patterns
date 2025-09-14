import {Message} from './message';

export class UserMessage extends Message {
  send(content: string): void {
    this.implementor.showMessage(`User message: ${content}`);
  }
}
