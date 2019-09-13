import React, { FunctionComponent } from 'react';
import Text from '../../../ui/Text';

const EmphasizedText: FunctionComponent = ({ children, ...rest }) => (
  <Text as="em" {...rest}>
    {children}
  </Text>
);

export default EmphasizedText;
