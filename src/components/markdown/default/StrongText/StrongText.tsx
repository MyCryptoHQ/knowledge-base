import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../../ui/Text';

const StyledStrongText = styled(Text)`
  font-weight: bold;
`;

const StrongText: FunctionComponent = ({ children, ...rest }) => (
  <StyledStrongText as="strong" {...rest}>
    {children}
  </StyledStrongText>
);

export default StrongText;
