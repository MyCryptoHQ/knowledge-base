import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledKeyboardInput = styled.kbd`
  background: ${({ theme }) => theme.controlBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => darken(0.25, theme.border)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  display: inline-block;
  vertical-align: middle;
  font-size: 1.25rem;
  padding: 2px 4px;
  white-space: nowrap;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const KeyboardInput: FunctionComponent = ({ children, ...rest }) => (
  <StyledKeyboardInput {...rest}>{children}</StyledKeyboardInput>
);

export default KeyboardInput;
