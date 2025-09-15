import {State} from './state';

export class PlayerContext {
  private state!: State;

  setState(state: State): void {
    this.state = state;
    console.log('Context: switching state...');
    this.state.handle();
  }
}
