import { theme as defaultTheme } from '@mycrypto/ui';
import merge from 'lodash.merge';

export const theme = merge(defaultTheme, {
  colors: {
    border: '#e3e3e3',
    background: {
      page: '#ffffff'
    }
  }
});

export type Theme = typeof theme;
