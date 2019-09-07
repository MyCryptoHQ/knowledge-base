import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
  display: block;
  font-family: ${({ theme }) => theme.monoFontFamily};
  background: ${({ theme }) => theme.controlBorder};
  padding: 1.6em;
`;

const Code: FunctionComponent = ({ children, ...rest }) => (
  <StyledCode {...rest}>{children}</StyledCode>
);

export default Code;
