import {Component as NgComponent} from '@angular/core';
import {CsvDataProcessor, ApiDataProcessor} from './concrete-classes';

@NgComponent({
  selector: 'app-template-method-pattern',
  standalone: true,
  template: `
    <h2>{{ "Template Method" }}</h2>

    <button (click)="runCsv()">{{ "Run CSV" }}</button>
    <button (click)="runApi()">{{ "Run API" }}</button>

    <p>{{ "Result: " }}</p>
    <ul>
        @for(log of logs; track log) {
              <li>{{ log }}</li>
        }
    </ul>
  `,
})
export class TemplateMethodComponent {
  logs: string[] = [];

  runCsv(): void {
    this.logs = [];
    const csvProcessor = new CsvDataProcessor();
    console.log = (msg: string) => this.logs.push(msg);
    csvProcessor.process();
  }

  runApi(): void {
    this.logs = [];
    const apiProcessor = new ApiDataProcessor();
    console.log = (msg: string) => this.logs.push(msg);
    apiProcessor.process();
  }
}
