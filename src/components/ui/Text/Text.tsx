import { Typography } from '@mycrypto/ui';
import styled, { css } from 'styled-components';

interface Props {
  small?: boolean;
  noMargin?: boolean;
  inverted?: boolean;
}

const Text = styled(Typography)<Props>`
  font-size: ${({ small }) => (small ? '1.4rem' : '1.6rem')} !important;
  margin: 1.25rem 0;

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `};
  color: ${({ inverted, theme }) => (inverted ? theme.textInverted : theme.text)};
`;

export default Text;
