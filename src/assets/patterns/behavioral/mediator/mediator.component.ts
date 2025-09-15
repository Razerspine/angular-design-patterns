import {Component as NgComponent} from '@angular/core';
import {ChatMediatorService} from './chat-mediator.service';
import {ChatUser} from './user';

@NgComponent({
  selector: 'app-mediator-pattern',
  standalone: true,
  template: `
    <h2>{{ "Mediator" }}</h2>

    <button (click)="startChat()">{{ "Start Chat" }}</button>
  `,
})
export class MediatorComponent {
  startChat(): void {
    const mediator = new ChatMediatorService();

    const alice = new ChatUser(mediator, 'Alice');
    const bob = new ChatUser(mediator, 'Bob');
    const charlie = new ChatUser(mediator, 'Charlie');

    mediator.addUser(alice);
    mediator.addUser(bob);
    mediator.addUser(charlie);

    alice.sendMessage('Hello everyone!');
    bob.sendMessage('Hi Alice!');
  }
}
