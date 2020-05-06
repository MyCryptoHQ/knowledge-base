import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

interface Props {
  maxWidth?: string;
}

const Container = styled.div<Props>`
  width: 100%;
  max-width: ${({ maxWidth = '120rem' }) => maxWidth};
  margin: auto;
  box-sizing: border-box;

  ${breakpoint('xl', 'max')`
    padding: 0 1.5rem;
  `};
`;

export default Container;
