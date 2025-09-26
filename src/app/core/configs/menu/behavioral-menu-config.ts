import {MenuItem} from 'primeng/api';

export const BEHAVIORAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'categories.behavioralPatterns',
    items: [
      {
        label: 'names.chainOfResponsibility',
        routerLink: ['/behavioral/chain-of-responsibility']
      },
      {
        label: 'names.command',
        routerLink: ['/behavioral/command']
      },
      {
        label: 'names.iterator',
        routerLink: ['/behavioral/iterator']
      },
      {
        label: 'names.mediator',
        routerLink: ['/behavioral/mediator']
      },
      {
        label: 'names.memento',
        routerLink: ['/behavioral/memento']
      },
      {
        label: 'names.observer',
        routerLink: ['/behavioral/observer']
      },
      {
        label: 'names.state',
        routerLink: ['/behavioral/state']
      },
      {
        label: 'names.strategy',
        routerLink: ['/behavioral/strategy']
      },
      {
        label: 'names.templateMethod',
        routerLink: ['/behavioral/template-method']
      },
      {
        label: 'names.visitor',
        routerLink: ['/behavioral/visitor']
      }
    ]
  }
];
