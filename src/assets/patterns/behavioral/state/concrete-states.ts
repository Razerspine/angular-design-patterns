import {State} from './state';

export class PlayingState implements State {
  handle(): void {
    console.log('🎵 Music is now Playing...');
  }
}

export class PausedState implements State {
  handle(): void {
    console.log('⏸ Music is Paused.');
  }
}

export class StoppedState implements State {
  handle(): void {
    console.log('⏹ Music is Stopped.');
  }
}
