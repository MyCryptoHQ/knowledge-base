import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledStrongText = styled.strong`
  font-weight: bold;
`;

const StrongText: FunctionComponent = ({ children, ...rest }) => (
  <StyledStrongText as="strong" {...rest}>
    {children}
  </StyledStrongText>
);

export default StrongText;
