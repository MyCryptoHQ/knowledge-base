import styled from 'styled-components';
import { Heading as UIHeading } from '@mycrypto/ui';
import { fluidRange } from 'polished';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizes: { [key in Size]: string } = {
  h1: '2.6rem',
  h2: '2.4rem',
  h3: '1.6rem',
  h4: '1.5rem',
  h5: '1.4rem',
  h6: '1.3rem'
};

interface Props {
  as: Size;
}

const Heading = styled.h1<Props>`
  margin-top: 0;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ as = 'h1' }) => sizes[as as Size]};
`;

export default Heading;
