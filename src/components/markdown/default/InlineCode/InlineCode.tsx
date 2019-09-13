import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.controlBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.monoFontFamily};
  vertical-align: middle;
`;

const InlineCode: FunctionComponent = ({ children, ...rest }) => (
  <StyledCode {...rest}>{children}</StyledCode>
);

export default InlineCode;
