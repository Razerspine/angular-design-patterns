import {Command} from './command.interface';

export class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach(c => c.execute());
    this.commands = []; // clear after execution
  }
}
