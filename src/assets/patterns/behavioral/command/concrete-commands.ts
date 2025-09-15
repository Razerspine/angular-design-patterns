import {Command} from './command.interface';

export class Light {
  turnOn(): void {
    console.log('💡 Light is ON');
  }

  turnOff(): void {
    console.log('💡 Light is OFF');
  }
}

export class TurnOnLightCommand implements Command {
  constructor(private light: Light) {
  }

  execute(): void {
    this.light.turnOn();
  }
}

export class TurnOffLightCommand implements Command {
  constructor(private light: Light) {
  }

  execute(): void {
    this.light.turnOff();
  }
}
