import styled from 'styled-components';
import Paragraph from '../Paragraph';

const List = styled.ul`
  margin: 3rem 0;

  ul,
  ol {
    margin: 0;
  }

  ${Paragraph} {
    margin: 1.25rem;
  }
`;

export default List;
