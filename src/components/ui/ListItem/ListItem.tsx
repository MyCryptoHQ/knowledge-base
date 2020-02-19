import styled from 'styled-components';
import Text from '../Text';

const ListItem = styled(Text)`
  margin-top: 0;
  margin-bottom: 0;

  & + & {
    margin-top: 1.6rem;
  }
`;

export default ListItem;
