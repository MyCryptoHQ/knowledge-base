import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
  margin-top: 0;
  margin-bottom: 1em;
  padding: 0 1em;
  color: ${({ theme }) => theme.textMuted};
  border-left: 0.25em solid ${({ theme }) => theme.border};

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const Blockquote: FunctionComponent = ({ children, ...rest }) => (
  <StyledBlockquote {...rest}>{children}</StyledBlockquote>
);

export default Blockquote;
