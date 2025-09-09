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
        path: 'structural/adapter',
        loadComponent: () =>
          import('@patterns/structural/adapter/adapter')
            .then(m => m.Adapter),
      },
      {
        path: 'behavioral/observer',
        loadComponent: () =>
          import('@patterns/behavioral/observer/observer')
            .then(m => m.Observer),
      },
    ],
  },
  {path: '**', redirectTo: ''},
];
