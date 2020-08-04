import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledEmphasizedText = styled.em`
  font-style: italic;
`;

const EmphasizedText: FunctionComponent = ({ children, ...rest }) => (
  <StyledEmphasizedText as="em" {...rest}>
    {children}
  </StyledEmphasizedText>
);

export default EmphasizedText;
