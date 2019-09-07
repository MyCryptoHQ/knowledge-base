import React, { FunctionComponent } from 'react';
import List from '../index';

const OrderedList: FunctionComponent = ({ children, ...rest }) => (
  <List as="ol" {...rest}>
    {children}
  </List>
);

export default OrderedList;
