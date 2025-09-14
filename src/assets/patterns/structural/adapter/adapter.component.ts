import {Component} from '@angular/core';
import {Logger} from './logger.interface';
import {LoggerAdapterService} from './logger-adapter.service';

@Component({
  selector: 'app-adapter-pattern',
  standalone: true,
  template: `
    <h2>Adapter Pattern Example</h2>
    <button (click)="testAdapter()">Test Logger Adapter</button>
  `,
})
export class AdapterComponent {
  private logger: Logger;

  constructor(loggerAdapter: LoggerAdapterService) {
    this.logger = loggerAdapter;
  }

  testAdapter(): void {
    this.logger.log('User clicked Test');
    this.logger.error('Something went wrong');
  }
}
