import {Component} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-singleton-pattern',
  standalone: true,
  template: `
    <h2>Singleton Pattern Example</h2>
    <button (click)="addInfo()">Add Info Log</button>
    <button (click)="addError()">Add Error Log</button>

    @for (log of logs; track log) {
      <p>{{ log }}</p>
    }
  `
})
export class SingletonPatternComponent {
  logs: string[] = [];

  constructor(
    private loggerService: LoggerService
  ) {
  }

  addInfo(): void {
    this.loggerService.addLog('ℹ️ Info log');
    this.logs = this.loggerService.getLogs();
  }

  addError(): void {
    this.loggerService.addLog('❌ Error log');
    this.logs = this.loggerService.getLogs();
  }
}
