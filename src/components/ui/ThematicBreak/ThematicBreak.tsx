import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledThematicBreak = styled.hr`
  height: 1px;
  padding: 0;
  margin: 2.3em 0;
  border: 0;
  background: ${({ theme }) => theme.border};
`;

const ThematicBreak: FunctionComponent = ({ children, ...rest }) => (
  <StyledThematicBreak {...rest}>{children}</StyledThematicBreak>
);

export default ThematicBreak;
