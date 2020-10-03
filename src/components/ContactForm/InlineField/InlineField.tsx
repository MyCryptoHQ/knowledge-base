import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';
import { StyledField } from '../Field';

const InlineField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  ${breakpoint('md', 'max')`
    flex-direction: column;

    ${StyledField} {
      margin: 1.25rem 0 !important;
    }
  `};

  ${StyledField} {
    flex-grow: 1;
    margin: 1.25rem 1rem;
  }

  ${StyledField}:first-of-type {
    margin-left: 0;
  }

  ${StyledField}:last-of-type {
    margin-right: 0;
  }
`;

export default InlineField;
