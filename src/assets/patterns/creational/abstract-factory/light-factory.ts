import {ThemeFactoryAbstract} from './theme-factory.abstract';
import {LightButton} from './light/light-button';
import {LightCheckbox} from './light/light-checkbox';
import {ButtonAbstract} from './button.abstract';
import {CheckboxAbstract} from './checkbox.abstract';

export class LightFactory extends ThemeFactoryAbstract {
  createButton(): ButtonAbstract {
    return new LightButton();
  }

  createCheckbox(): CheckboxAbstract {
    return new LightCheckbox();
  }
}
