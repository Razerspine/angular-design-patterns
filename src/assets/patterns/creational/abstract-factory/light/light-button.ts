import {ButtonAbstract} from '../button.abstract';

export class LightButton extends ButtonAbstract {
  render(): void {
    console.log('☀️ Light Button');
  }
}
