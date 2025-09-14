import {Component} from '@angular/core';
import {ConsoleMessageService} from './console-message.service';
import {AlertMessageService} from './alert-message.service';
import {UserMessage} from './user-message';

@Component({
  selector: 'app-bridge-pattern',
  standalone: true,
  template: `
    <h2>Bridge Pattern Example</h2>
    <button (click)="sendConsole()">Send Console Message</button>
    <button (click)="sendAlert()">Send Alert Message</button>
  `,
})
export class BridgeComponent {
  constructor(
    private consoleService: ConsoleMessageService,
    private alertService: AlertMessageService
  ) {
  }

  sendConsole(): void {
    const message = new UserMessage(this.consoleService);
    message.send('Hello from Console!');
  }

  sendAlert(): void {
    const message = new UserMessage(this.alertService);
    message.send('Hello from Alert!');
  }
}
