import { DefaultTheme } from 'styled-components';
import { light } from '@mycrypto/ui';
import { transparentize } from 'polished';

const theme: DefaultTheme = {
  ...light,

  textMuted: transparentize(0.25, light.text),
  border: '#e8eaed',
  borderRadius: '0.125em',
  borderRadiusLarge: '0.375em',

  monoFontFamily: `'Source Code Pro', monospace`
};

export default theme;
