import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

const PageContainer = styled.div`
  width: 100%;
  flex: 1;
  background: ${({ theme }) => theme.subHeaderBackground};
  z-index: 0;

  ${breakpoint('lg', 'max')`
    margin-top: 7.7rem;
  `};
`;

export default PageContainer;
