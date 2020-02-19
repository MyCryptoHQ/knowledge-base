import styled from 'styled-components';
import breakpoint from '../../../../theme/breakpoints';

const Divider = styled.div`
  width: 2px;
  height: 220px;
  background: ${({ theme }) => theme.footerBorder};
  margin: 0 30px;

  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

export default Divider;
