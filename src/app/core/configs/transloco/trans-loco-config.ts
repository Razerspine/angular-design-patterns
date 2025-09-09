import {translocoConfig, TranslocoConfig} from '@ngneat/transloco';

export const transLocoConfigFactory = (): TranslocoConfig =>
  translocoConfig({
    availableLangs: ['en', 'uk'],
    defaultLang: 'en',
    fallbackLang: 'en',
    reRenderOnLangChange: true,
    prodMode: false,
  });
