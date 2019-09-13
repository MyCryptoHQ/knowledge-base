import styled, { css } from 'styled-components';
import { fluidRange } from 'polished';
import { Typography } from '@mycrypto/ui';

interface Props {
  small?: boolean;
  noMargin?: boolean;
  inverted?: boolean;
}

const Text = styled(Typography)<Props>`
  ${({ small }) =>
    small &&
    fluidRange({ prop: 'font-size', fromSize: '12px', toSize: '14px' }, '400px', '1000px')};

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};
  color: ${({ inverted, theme }) => (inverted ? theme.textInverted : theme.text)};
`;

export default Text;
