import {ChatMediator, User as IUser} from './chat-mediator.interface';

export class ChatUser implements IUser {
  constructor(private mediator: ChatMediator, private name: string) {
  }

  sendMessage(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}
