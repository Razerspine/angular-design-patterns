import {Routes} from '@angular/router';
import {Main} from '@patterns/main/main';
import {Creational} from '@patterns/creational/components/creational';
import {Structural} from '@patterns/structural/components/structural';
import {Behavioral} from '@patterns/behavioral/components/behavioral';
import {CreationalCategory} from '@patterns/creational/components/creational-category/creational-category';
import {StructuralCategory} from '@patterns/structural/components/structural-category/structural-category';
import {BehavioralCategory} from '@patterns/behavioral/components/behavioral-category/behavioral-category';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Main
      },
      {
        path: 'creational',
        component: Creational,
        children: [
          {
            path: '',
            component: CreationalCategory,
          },
          {
            path: 'factory',
            loadComponent: () =>
              import('@patterns/creational/factory/factory').then(m => m.Factory),
          },
          {
            path: 'abstract-factory',
            loadComponent: () =>
              import('@patterns/creational/abstract-factory/abstract-factory')
                .then(m => m.AbstractFactory),
          },
          {
            path: 'builder',
            loadComponent: () =>
              import('@patterns/creational/builder/builder').then(m => m.Builder),
          },
          {
            path: 'prototype',
            loadComponent: () =>
              import('@patterns/creational/prototype/prototype').then(m => m.Prototype),
          },
          {
            path: 'singleton',
            loadComponent: () =>
              import('@patterns/creational/singleton/singleton').then(m => m.Singleton),
          },
        ],
      },
      {
        path: 'structural',
        component: Structural,
        children: [
          {
            path: '',
            component: StructuralCategory,
          },
          {
            path: 'adapter',
            loadComponent: () =>
              import('@patterns/structural/adapter/adapter').then(m => m.Adapter),
          },
          {
            path: 'bridge',
            loadComponent: () =>
              import('@patterns/structural/bridge/bridge').then(m => m.Bridge),
          },
          {
            path: 'composite',
            loadComponent: () =>
              import('@patterns/structural/composite/composite').then(m => m.Composite),
          },
          {
            path: 'decorator',
            loadComponent: () =>
              import('@patterns/structural/decorator/decorator').then(m => m.Decorator),
          },
          {
            path: 'facade',
            loadComponent: () =>
              import('@patterns/structural/facade/facade').then(m => m.Facade),
          },
          {
            path: 'flyweight',
            loadComponent: () =>
              import('@patterns/structural/flyweight/flyweight').then(m => m.Flyweight),
          },
          {
            path: 'proxy',
            loadComponent: () =>
              import('@patterns/structural/proxy/proxy').then(m => m.Proxy),
          },
        ],
      },
      {
        path: 'behavioral',
        component: Behavioral,
        children: [
          {
            path: '',
            component: BehavioralCategory,
          },
          {
            path: 'chain-of-responsibility',
            loadComponent: () =>
              import('@patterns/behavioral/chain-of-responsibility/chain-of-responsibility')
                .then(m => m.ChainOfResponsibility),
          },
          {
            path: 'command',
            loadComponent: () =>
              import('@patterns/behavioral/command/command').then(m => m.Command),
          },
          {
            path: 'iterator',
            loadComponent: () =>
              import('@patterns/behavioral/iterator/iterator').then(m => m.Iterator),
          },
          {
            path: 'mediator',
            loadComponent: () =>
              import('@patterns/behavioral/mediator/mediator').then(m => m.Mediator),
          },
          {
            path: 'memento',
            loadComponent: () =>
              import('@patterns/behavioral/memento/memento').then(m => m.Memento),
          },
          {
            path: 'observer',
            loadComponent: () =>
              import('@patterns/behavioral/observer/observer').then(m => m.Observer),
          },
          {
            path: 'state',
            loadComponent: () =>
              import('@patterns/behavioral/state/state').then(m => m.State),
          },
          {
            path: 'strategy',
            loadComponent: () =>
              import('@patterns/behavioral/strategy/strategy').then(m => m.Strategy),
          },
          {
            path: 'template-method',
            loadComponent: () =>
              import('@patterns/behavioral/template-method/template-method')
                .then(m => m.TemplateMethod),
          },
          {
            path: 'visitor',
            loadComponent: () =>
              import('@patterns/behavioral/visitor/visitor').then(m => m.Visitor),
          },
        ],
      },
    ],
  },
  {path: '**', redirectTo: ''},
];
