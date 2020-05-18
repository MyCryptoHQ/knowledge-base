import styled from 'styled-components';
import Paragraph from '../Paragraph';

const List = styled.ul`
  margin: 3rem 0;

  & & {
    list-style-type: upper-roman;
    margin: 0;
  }

  & & & {
    list-style-type: lower-alpha;
  }

  ${Paragraph} {
    margin: 1.25rem;
  }
`;

export default List;
