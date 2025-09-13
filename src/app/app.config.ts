import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {MessageService} from 'primeng/api';
import {provideHttpClient} from '@angular/common/http';
import {provideHighlightOptions} from 'ngx-highlightjs';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideTransloco} from '@ngneat/transloco';
import {transLocoConfigFactory} from '@core/configs/transloco/trans-loco-config';
import {TransLocoLoader} from '@core/services/trans-loco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      ripple: true,
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
      },
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.p-dark',
        }
      }
    }),
    provideAnimationsAsync(),
    MessageService,
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
      }
    }),
    provideTransloco({
      config: transLocoConfigFactory(),
      loader: TransLocoLoader,
    }),
  ]
};
