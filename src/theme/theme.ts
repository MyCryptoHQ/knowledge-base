import { DefaultTheme } from 'styled-components';
import { light } from '@mycrypto/ui';
import { transparentize } from 'polished';

const theme: DefaultTheme = {
  ...light,

  secondary: '#163150',
  textMuted: transparentize(0.25, light.text),
  textInverted: 'white',
  border: '#e8eaed',
  borderRadius: '0.125em',
  borderRadiusLarge: '0.375em',
  subHeaderBackground: '#fafafa',

  fontFamily: `'Lato', sans-serif`,
  monoFontFamily: `'Source Code Pro', monospace`
};

export default theme;
