import {Routes} from '@angular/router';
import {Main} from '@patterns/main/main';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Main,
      },
      {
        path: 'creational/factory',
        loadComponent: () =>
          import('@patterns/creational/factory/factory')
            .then(m => m.Factory),
      },
      {
        path: 'creational/abstract-factory',
        loadComponent: () =>
          import('@patterns/creational/abstract-factory/abstract-factory')
            .then(m => m.AbstractFactory),
      },
      {
        path: 'creational/builder',
        loadComponent: () =>
          import('@patterns/creational/builder/builder')
            .then(m => m.Builder),
      },
      {
        path: 'creational/prototype',
        loadComponent: () =>
          import('@patterns/creational/prototype/prototype')
            .then(m => m.Prototype),
      },
      {
        path: 'creational/singleton',
        loadComponent: () =>
          import('@patterns/creational/singleton/singleton')
            .then(m => m.Singleton),
      },
      {
        path: 'structural/adapter',
        loadComponent: () =>
          import('@patterns/structural/adapter/adapter')
            .then(m => m.Adapter),
      },
      {
        path: 'structural/bridge',
        loadComponent: () =>
          import('@patterns/structural/bridge/bridge')
            .then(m => m.Bridge),
      },
      {
        path: 'structural/composite',
        loadComponent: () =>
          import('@patterns/structural/composite/composite')
            .then(m => m.Composite),
      },
      {
        path: 'structural/decorator',
        loadComponent: () =>
          import('@patterns/structural/decorator/decorator')
            .then(m => m.Decorator),
      },
      {
        path: 'structural/facade',
        loadComponent: () =>
          import('@patterns/structural/facade/facade')
            .then(m => m.Facade),
      },
      {
        path: 'structural/flyweight',
        loadComponent: () =>
          import('@patterns/structural/flyweight/flyweight')
            .then(m => m.Flyweight),
      },
      {
        path: 'structural/proxy',
        loadComponent: () =>
          import('@patterns/structural/proxy/proxy')
            .then(m => m.Proxy),
      },
      {
        path: 'behavioral/chain-of-responsibility',
        loadComponent: () =>
          import('@patterns/behavioral/chain-of-responsibility/chain-of-responsibility')
            .then(m => m.ChainOfResponsibility),
      },
      {
        path: 'behavioral/command',
        loadComponent: () =>
          import('@patterns/behavioral/command/command')
            .then(m => m.Command),
      },
      {
        path: 'behavioral/iterator',
        loadComponent: () =>
          import('@patterns/behavioral/iterator/iterator')
            .then(m => m.Iterator),
      },
      {
        path: 'behavioral/mediator',
        loadComponent: () =>
          import('@patterns/behavioral/mediator/mediator')
            .then(m => m.Mediator),
      },
      {
        path: 'behavioral/memento',
        loadComponent: () =>
          import('@patterns/behavioral/memento/memento')
            .then(m => m.Memento),
      },
      {
        path: 'behavioral/observer',
        loadComponent: () =>
          import('@patterns/behavioral/observer/observer')
            .then(m => m.Observer),
      },
      {
        path: 'behavioral/state',
        loadComponent: () =>
          import('@patterns/behavioral/state/state')
            .then(m => m.State),
      },
      {
        path: 'behavioral/strategy',
        loadComponent: () =>
          import('@patterns/behavioral/strategy/strategy')
            .then(m => m.Strategy),
      },
      {
        path: 'behavioral/template-method',
        loadComponent: () =>
          import('@patterns/behavioral/template-method/template-method')
            .then(m => m.TemplateMethod),
      },
      {
        path: 'behavioral/visitor',
        loadComponent: () =>
          import('@patterns/behavioral/visitor/visitor')
            .then(m => m.Visitor),
      },
    ],
  },
  {path: '**', redirectTo: ''},
];
