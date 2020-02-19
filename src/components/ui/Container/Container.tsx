import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: auto;
  box-sizing: border-box;

  ${breakpoint('xl', 'max')`
    padding: 0 3%;
  `};
`;

export default Container;
