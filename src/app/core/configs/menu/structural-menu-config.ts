import {MenuItem} from 'primeng/api';

export const STRUCTURAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'categories.structuralPatterns',
    items: [
      {
        label: 'names.adapter',
        routerLink: ['/structural/adapter']
      },
      {
        label: 'names.bridge',
        routerLink: ['/structural/bridge']
      },
      {
        label: 'names.composite',
        routerLink: ['/structural/composite']
      },
      {
        label: 'names.decorator',
        routerLink: ['/structural/decorator']
      },
      {
        label: 'names.facade',
        routerLink: ['/structural/facade']
      },
      {
        label: 'names.flyweight',
        routerLink: ['/structural/flyweight']
      },
      {
        label: 'names.proxy',
        routerLink: ['/structural/proxy']
      }
    ]
  },
];
