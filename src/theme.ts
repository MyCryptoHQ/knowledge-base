import { theme as defaultTheme } from '@mycrypto/ui';
import merge from 'lodash.merge';

export const theme = merge(defaultTheme, {
  colors: {
    border: { light: '#e3e3e3', dark: '#b5bfc7' },
    background: {
      page: '#ffffff',
      quote: '#a582ff',
      search: '#f0f0f0'
    },
    text: {
      accent: '#8f8f8f',
      purple: '#a682ff'
    },
    table: {
      background: '#fafcfc',
      border: '#e8eaed'
    }
  },
  variants: {
    banner: {
      info: {
        color: 'text.accent'
      }
    }
  }
});

export type Theme = typeof theme;