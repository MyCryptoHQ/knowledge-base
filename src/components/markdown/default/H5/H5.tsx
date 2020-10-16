import { FunctionComponent } from 'react';
import Heading from '../Heading';

const H5: FunctionComponent = ({ children, ...rest }) => (
  <Heading as="h5" {...rest}>
    {children}
  </Heading>
);

export default H5;
