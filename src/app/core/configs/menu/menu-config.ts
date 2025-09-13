import {MenuItem} from 'primeng/api';
import {CREATIONAL_MENU_CONFIG} from '@core/configs/menu/creational-menu-config';
import {STRUCTURAL_MENU_CONFIG} from '@core/configs/menu/structural-menu-config';
import {BEHAVIORAL_MENU_CONFIG} from '@core/configs/menu/behavioral-menu-config';

export const MENU_CONFIG: MenuItem[] = [
  ...CREATIONAL_MENU_CONFIG,
  {
    separator: true
  },
  ...STRUCTURAL_MENU_CONFIG,
  {
    separator: true
  },
  ...BEHAVIORAL_MENU_CONFIG
]
