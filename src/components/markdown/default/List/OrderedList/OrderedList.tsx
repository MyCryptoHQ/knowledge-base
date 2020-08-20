import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import List from '../index';

const StyledOrderedList = styled(List).attrs({ as: 'ol' })`
  list-style-type: decimal;

  & & {
    list-style-type: lower-alpha;
  }

  & & & {
    list-style-type: lower-roman;
  }
`;

const OrderedList: FunctionComponent = ({ children, ...rest }) => (
  <StyledOrderedList {...rest}>{children}</StyledOrderedList>
);

export default OrderedList;
