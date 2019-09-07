import styled from 'styled-components';

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
`;

export default List;
