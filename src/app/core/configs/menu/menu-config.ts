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
  {
    separator: true
  },
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
  {
    separator: true
  },
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
]
