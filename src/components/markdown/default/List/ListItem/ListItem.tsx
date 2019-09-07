import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../../../ui/Text';

const StyledListItem = styled(Text)`
  margin-top: 0;
  margin-bottom: 0;

  & + & {
    margin-top: 0.25em;
  }
`;

const ListItem: FunctionComponent = ({ children, ...rest }) => (
  <StyledListItem as="li" {...rest}>
    {children}
  </StyledListItem>
);

export default ListItem;
