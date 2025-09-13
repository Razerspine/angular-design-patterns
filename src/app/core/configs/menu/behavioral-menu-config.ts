import {MenuItem} from 'primeng/api';

export const BEHAVIORAL_MENU_CONFIG: MenuItem[] = [
  {
    label: 'Behavioral Patterns',
    items: [
      {
        label: 'Chain of Responsibility',
        routerLink: ['/behavioral/chain-of-responsibility']
      },
      {
        label: 'Command',
        routerLink: ['/behavioral/command']
      },
      {
        label: 'Iterator',
        routerLink: ['/behavioral/iterator']
      },
      {
        label: 'Mediator',
        routerLink: ['/behavioral/mediator']
      },
      {
        label: 'Memento',
        routerLink: ['/behavioral/memento']
      },
      {
        label: 'Observer',
        routerLink: ['/behavioral/observer']
      },
      {
        label: 'State',
        routerLink: ['/behavioral/state']
      },
      {
        label: 'Strategy',
        routerLink: ['/behavioral/strategy']
      },
      {
        label: 'Template Method',
        routerLink: ['/behavioral/template-method']
      },
      {
        label: 'Visitor',
        routerLink: ['/behavioral/visitor']
      }
    ]
  }
];
