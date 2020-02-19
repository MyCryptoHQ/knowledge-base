import React, { FunctionComponent } from 'react';
import List from '../index';

const UnorderedList: FunctionComponent = ({ children, ...rest }) => (
  <List as="ul" {...rest}>
    {children}
  </List>
);

export default UnorderedList;
