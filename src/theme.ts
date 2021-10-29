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
    },
    input: {
      simple: {
        textarea: defaultTheme.variants.input.simple.input
      }
    }
  },
  text: {
    heading: {
      color: 'text.primary'
    },
    subHeading: {
      color: 'text.primary'
    }
  },
  fontSizes: {
    tiny: '14px',
    small: '18px',
    medium: '24px',
    large: '45px'
  }
});

export type Theme = typeof theme;
