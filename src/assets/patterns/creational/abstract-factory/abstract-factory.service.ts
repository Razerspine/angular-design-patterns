import {Injectable} from '@angular/core';
import {ThemeFactoryAbstract} from './theme-factory.abstract';
import {LightFactory} from './light-factory';
import {DarkFactory} from './dark-factory';

@Injectable({
  providedIn: 'root'
})
export class AbstractFactoryService {
  getFactory(theme: 'light' | 'dark'): ThemeFactoryAbstract {
    if (theme === 'light') return new LightFactory();
    return new DarkFactory();
  }
}
