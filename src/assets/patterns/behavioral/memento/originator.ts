import {Memento} from './memento';

export class Originator {
  private state!: string;

  setState(state: string): void {
    console.log(`Originator: setting state to "${state}"`);
    this.state = state;
  }

  save(): Memento {
    console.log('Originator: saving state to memento');
    return new Memento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: state restored to "${this.state}"`);
  }
}
