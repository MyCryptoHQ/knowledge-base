import { darken, lighten, modularScale, transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';

const backgroundLight = 'white';
export const borderRadius = '0.125em';
export const borderRadiusLarge = '0.375em';
const lightnessMod = 0.06;
const linkLight = '#007a99';
const optionHoverBackground = '#b5bfc7';
const optionSelected = '#a682ff';
const outline = '0 0 0 0.25em ';
const primary = '#007896';
const text = '#424242';
const textLightnessMod = lightnessMod * 7.5;
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
const switchBackgroundGreyable = lighten(0.3, 'grey');
export const transitionDuration = '0.12s';
export const monospace = '\'Roboto Mono\', Menlo, Monaco, Consolas, \'Courier New\', monospace';

/**
 * Legacy `@mycrypto/ui` theme. TODO: Replace with new theme.
 */
const light = {
  name: 'Light',

  actionPanelBackground: darken(0.01, backgroundLight),
  actionPanelBorder: '#e8eaed',
  background: backgroundLight,
  cardText: '#697685',
  controlBackground: backgroundLight,
  controlBorder: transparentize(0.95, '#3f3f44'),
  headline: '#163150',
  iconColor: '#424242',
  link: linkLight,
  linkHover: darken(0.1, linkLight),
  optionHoverBackground: lighten(0.2, optionHoverBackground),
  optionSelected,
  outline: outline + transparentize(0.35, linkLight),
  panelBackground: backgroundLight,
  panelBackgroundDark: darken(lightnessMod, backgroundLight),
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  tableHeadBackground: '#fafcfc',
  tableHeadBorder: '#e8eaed',
  tableRowBorder: '#e8eaed',
  switchBackgroundGreyable,
  text,
  textLight: lighten(textLightnessMod, text)
};

/**
 * TODO: Replace with new theme.
 */
const theme: DefaultTheme = {
  ...light,

  secondary: '#163150',
  textMuted: transparentize(0.25, light.text),
  textInverted: 'white',
  border: '#e8eaed',
  borderRadius: '0.125em',
  borderRadiusLarge: '0.375em',
  subHeaderBackground: '#fafafa',
  footerBorder: '#3e546d',
  footerLink: '#bbc2cb',

  fontFamily: '"Lato", sans-serif',
  monoFontFamily: '"Source Code Pro", monospace',

  headerBorder: '#3e546d',
  navigationHover: '#304b6a',

  tagBackground: '#e3e3e3'
};

export default theme;
