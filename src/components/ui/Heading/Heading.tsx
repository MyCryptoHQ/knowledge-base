import styled from 'styled-components';
import { Heading as UIHeading } from '@mycrypto/ui';
import { fluidRange } from 'polished';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const ranges: { [key in Size]: { fromSize: string; toSize: string } } = {
  h1: {
    fromSize: '2.25rem',
    toSize: '2.5rem'
  },
  h2: {
    fromSize: '2rem',
    toSize: '2.25rem'
  },
  h3: {
    fromSize: '1.75rem',
    toSize: '2rem'
  },
  h4: {
    fromSize: '1.5rem',
    toSize: '1.75rem'
  },
  h5: {
    fromSize: '1.25rem',
    toSize: '1.5rem'
  },
  h6: {
    fromSize: '1rem',
    toSize: '1.25rem'
  }
};

interface Props {
  as: Size;
}

const Heading = styled(UIHeading)<Props>`
  ${({ as = 'h1' }: Props) =>
    fluidRange(
      {
        prop: 'font-size',
        ...ranges[as]
      },
      '400px',
      '1000px'
    )};
`;

export default Heading;
