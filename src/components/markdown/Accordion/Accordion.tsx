import styled from 'styled-components';
import { StyledAlert } from '../../ui/Alert';

const Accordion = styled.ul`
  list-style-type: none;
  margin: 3rem 0;
  padding: 0;

  ${StyledAlert} {
    background: ${({ theme }) => theme.subHeaderBackground};
  }
`;

export default Accordion;
