import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-weight: bold;

  :hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Link: FunctionComponent = ({ children, ...rest }) => (
  <StyledLink {...rest}>{children}</StyledLink>
);

export default Link;
