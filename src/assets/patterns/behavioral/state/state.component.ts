import {Component as NgComponent} from '@angular/core';
import {PlayerContext} from './context';
import {PlayingState, PausedState, StoppedState} from './concrete-states';

@NgComponent({
  selector: 'app-state-pattern',
  standalone: true,
  template: `
    <h2>{{ "State" }}</h2>

    <button (click)="play()">{{ "Play" }}</button>
    <button (click)="pause()">{{ "Pause" }}</button>
    <button (click)="stop()">{{ "Stop" }}</button>
  `,
})
export class StateComponent {
  private player = new PlayerContext();

  play(): void {
    this.player.setState(new PlayingState());
  }

  pause(): void {
    this.player.setState(new PausedState());
  }

  stop(): void {
    this.player.setState(new StoppedState());
  }
}
