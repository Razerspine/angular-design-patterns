import {MenuItem} from 'primeng/api';

export const STRUCTURAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'Structural Patterns',
    items: [
      {
        label: 'Adapter',
        routerLink: ['/structural/adapter']
      },
      {
        label: 'Bridge',
        routerLink: ['/structural/bridge']
      },
      {
        label: 'Composite',
        routerLink: ['/structural/composite']
      },
      {
        label: 'Decorator',
        routerLink: ['/structural/decorator']
      },
      {
        label: 'Facade',
        routerLink: ['/structural/facade']
      },
      {
        label: 'Flyweight',
        routerLink: ['/structural/flyweight']
      },
      {
        label: 'Proxy',
        routerLink: ['/structural/proxy']
      }
    ]
  },
];
