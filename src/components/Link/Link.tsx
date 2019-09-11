import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  to: string;
  external?: boolean;
  newTab?: boolean;
}

const linkCss = css`
  text-decoration: none;
`;

const StyledLink = styled(GatsbyLink)`
  ${linkCss};
`;

const StyledExternalLink = styled.a`
  ${linkCss};
`;

const Link: FunctionComponent<Props> = ({ to, external = false, newTab = false, children }) => {
  if (external) {
    return (
      <StyledExternalLink href={to} target={newTab ? '_blank' : '_self'} rel="noopener noreferrer">
        {children}
      </StyledExternalLink>
    );
  }

  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
