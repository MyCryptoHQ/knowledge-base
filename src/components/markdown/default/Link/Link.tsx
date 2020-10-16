import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.link};
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Link: FunctionComponent = ({ children, ...rest }) => <StyledLink {...rest}>{children}</StyledLink>;

export default Link;
