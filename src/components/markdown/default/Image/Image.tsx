import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from '../../../../theme/breakpoints';

interface Props {
  float?: 'left' | 'right';
  max?: string;
}

const StyledImage = styled.img<Props>`
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2) !important;

  ${({ max }) =>
    max &&
    css`
      max-width: ${max};
      max-height: ${max};
    `};

  ${({ float }) =>
    float &&
    css`
      float: ${float};
      margin: 3rem ${float === 'right' ? '0rem' : '3rem'} 3rem ${float === 'left' ? '0rem' : '3rem'};
      box-shadow: none !important;

      ${breakpoint('md', 'max')`
      float: none;
      display: block;
      margin: 3rem auto;
      text-align: center;
    `};
    `};
`;

const Image: FunctionComponent<Props> = ({ float, max, children, ...rest }) => (
  <StyledImage float={float} max={max} {...rest}>
    {children}
  </StyledImage>
);

export default Image;
