import { FunctionComponent } from 'react';
import Heading from '../Heading';

const H3: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h3" {...rest}>
    {children}
  </Heading>
);

export default H3;
