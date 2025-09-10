import {ThemeFactoryAbstract} from './theme-factory.abstract';
import {DarkButton} from './dark/dark-button';
import {DarkCheckbox} from './dark/dark-checkbox';
import {ButtonAbstract} from './button.abstract';
import {CheckboxAbstract} from './checkbox.abstract';

export class DarkFactory extends ThemeFactoryAbstract {
  createButton(): ButtonAbstract {
    return new DarkButton();
  }

  createCheckbox(): CheckboxAbstract {
    return new DarkCheckbox();
  }
}
