import React, { FunctionComponent } from 'react';
import Heading from '../../../ui/Heading';

const H2: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h2" {...rest}>
    {children}
  </Heading>
);

export default H2;
