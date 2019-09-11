import { css } from 'styled-components';

export const breakpoints: { [key: string]: number } = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280
};

const breakpoint = (key: keyof typeof breakpoints, type: 'min' | 'max' = 'min') => (
  ...args: [TemplateStringsArray]
) =>
  css`
      @media screen and (${type}-width: ${breakpoints[key]}px) {
        ${css(...args)};
      }
    `;

export default breakpoint;
