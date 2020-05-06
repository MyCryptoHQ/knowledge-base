import styled from 'styled-components';
import Paragraph from '../Paragraph';

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 1.6em;

  & & {
    list-style-type: lower-roman;
    margin-bottom: 0;
  }

  & & & {
    list-style-type: lower-alpha;
  }

  ${Paragraph} {
    margin: 1.25rem;
  }
`;

export default List;
