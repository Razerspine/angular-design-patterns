import {ChatMediator, User} from './chat-mediator.interface';

export class ChatMediatorService implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    }
  }
}
