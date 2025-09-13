import {MenuItem} from 'primeng/api';

export const CREATIONAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'Creational Patterns',
    items: [
      {
        label: 'Factory Method',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Abstract Factory',
        routerLink: ['/creational/abstract-factory']

      },
      {
        label: 'Builder',
        routerLink: ['/creational/builder']
      },
      {
        label: 'Prototype',
        routerLink: ['/creational/prototype']
      },
      {
        label: 'Singleton',
        routerLink: ['/creational/singleton']
      }
    ]
  },
];
