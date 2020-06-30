import { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';

export const breakpoints: { [key: string]: number } = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280
};

const breakpoint = (key: keyof typeof breakpoints, type: 'min' | 'max' = 'min') => (
  first: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation =>
  css`
    @media screen and (${type}-width: ${breakpoints[key]}px) {
      ${css(first, ...interpolations)};
    }
  `;

export default breakpoint;
