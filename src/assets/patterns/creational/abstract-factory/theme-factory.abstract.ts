import {ButtonAbstract} from './button.abstract';
import {CheckboxAbstract} from './checkbox.abstract';

export abstract class ThemeFactoryAbstract {
  abstract createButton(): ButtonAbstract;

  abstract createCheckbox(): CheckboxAbstract;
}
