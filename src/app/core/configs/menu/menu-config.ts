import {MenuItem} from 'primeng/api';

export const MenuConfig: MenuItem[] = [
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
        routerLink: ['creational/builder']
      },
      {
        label: 'Prototype',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Singleton',
        routerLink: ['/creational/factory']
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Structural Patterns',
    items: [
      {
        label: 'Adapter',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Bridge',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Composite',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Decorator',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Facade',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Flyweight',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Proxy',
        routerLink: ['/creational/factory']
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Behavioral Patterns',
    items: [
      {
        label: 'Chain of Responsibility',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Command',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Iterator',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Mediator',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Memento',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Observer',
        routerLink: ['/creational/factory']
      },
      {
        label: 'State',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Strategy',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Template Method',
        routerLink: ['/creational/factory']
      },
      {
        label: 'Visitor',
        routerLink: ['/creational/factory']
      }
    ]
  }
]
