import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

const Section = styled.section`
  padding: 4.6em;

  ${breakpoint('lg', 'max')`
    padding: 4.6rem 0;
  `};
`;

export default Section;
