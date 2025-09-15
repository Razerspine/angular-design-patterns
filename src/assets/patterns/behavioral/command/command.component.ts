import {Component as NgComponent} from '@angular/core';
import {Light, TurnOnLightCommand, TurnOffLightCommand} from './concrete-commands';
import {RemoteControl} from './invoker';

@NgComponent({
  selector: 'app-command-pattern',
  standalone: true,
  template: `
    <h2>{{ "Command" }}</h2>

    <button (click)="turnOn()">{{ "On" }}</button>
    <button (click)="turnOff()">{{ "Off" }}</button>
    <button (click)="execute()">{{ "Execute" }}</button>

    <pre>{{ result }}</pre>
  `,
})
export class CommandComponent {
  result = '';
  private remote = new RemoteControl();
  private light = new Light();

  turnOn(): void {
    this.remote.addCommand(new TurnOnLightCommand(this.light));
    this.result += 'Queued TurnOnLightCommand\n';
  }

  turnOff(): void {
    this.remote.addCommand(new TurnOffLightCommand(this.light));
    this.result += 'Queued TurnOffLightCommand\n';
  }

  execute(): void {
    this.result += 'Executing commands...\n';
    this.remote.executeCommands();
  }
}
