import {ButtonAbstract} from '../button.abstract';

export class DarkButton extends ButtonAbstract {
  render(): void {
    console.log('🌙 Dark Button');
  }
}
