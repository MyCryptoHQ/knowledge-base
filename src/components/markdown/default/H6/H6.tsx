import React, { FunctionComponent } from 'react';
import Heading from '../../../ui/Heading';

const H6: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h6" {...rest}>
    {children}
  </Heading>
);

export default H6;
