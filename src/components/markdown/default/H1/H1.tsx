import { FunctionComponent } from 'react';
import Heading from '../Heading';

const H1: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h1" {...rest}>
    {children}
  </Heading>
);

export default H1;
