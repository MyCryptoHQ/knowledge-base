import { FunctionComponent } from 'react';
import Heading from '../Heading';

const H4: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h4" {...rest}>
    {children}
  </Heading>
);

export default H4;
