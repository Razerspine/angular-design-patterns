import {MenuItem} from 'primeng/api';

export const CREATIONAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'categories.creationalPatterns',
    items: [
      {
        label: 'names.factoryMethod',
        routerLink: ['/creational/factory']
      },
      {
        label: 'names.abstractFactory',
        routerLink: ['/creational/abstract-factory']

      },
      {
        label: 'names.builder',
        routerLink: ['/creational/builder']
      },
      {
        label: 'names.prototype',
        routerLink: ['/creational/prototype']
      },
      {
        label: 'names.singleton',
        routerLink: ['/creational/singleton']
      }
    ]
  },
];
