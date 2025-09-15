import {Component as NgComponent} from '@angular/core';
import {AuthHandler, LoggingHandler, DataHandler} from './concrete-handlers';

@NgComponent({
  selector: 'app-chain-of-responsibility',
  standalone: true,
  template: `
    <h2>{{ "Chain of Responsibility" }}</h2>

    <button (click)="process('auth')">Auth</button>
    <button (click)="process('log')">Log</button>
    <button (click)="process('data')">Data</button>
    <button (click)="process('unknown')">Unknown</button>

    <pre>{{ result }}</pre>
  `,
})
export class ChainOfResponsibilityComponent {
  result = '';
  private chain: AuthHandler;

  constructor() {
    const auth = new AuthHandler();
    const log = new LoggingHandler();
    const data = new DataHandler();

    auth.setNext(log).setNext(data);
    this.chain = auth;
  }

  process(request: string): void {
    this.result = this.chain.handle(request) ?? 'No handler could process the request';
  }
}
