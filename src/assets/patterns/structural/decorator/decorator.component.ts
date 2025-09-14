import {Component as NgComponent} from '@angular/core';
import {BasicNotifier} from './basic-notifier';
import {SmsNotifier} from './sms-notifier';
import {EmailNotifier} from './email-notifier';

@NgComponent({
  selector: 'app-decorator-pattern',
  standalone: true,
  template: `
    <h2>{{ "Decorator" }}</h2>

    <button (click)="testDecorator()">
      {{ "Test Decorator" }}
    </button>

    <pre>{{ result }}</pre>
  `,
})
export class DecoratorComponent {
  result = '';

  testDecorator(): void {
    let notifier = new BasicNotifier();
    notifier = new SmsNotifier(notifier);
    notifier = new EmailNotifier(notifier);

    this.result = notifier.send('Hello User');
  }
}
