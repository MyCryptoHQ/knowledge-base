import { Link as GatsbyLink } from 'gatsby';
import { FunctionComponent } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface LinkProps {
  to: string;
  external?: boolean;
  newTab?: boolean;
  className?: string;
}

const linkCss = css`
  text-decoration: none;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.link};
  transition: color 0.2s;

  :hover {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.link};
  }
`;

const StyledLink = styled(GatsbyLink)`
  ${linkCss};
`;

const StyledExternalLink = styled.a`
  ${linkCss};
`;

export const Link: FunctionComponent<LinkProps> = ({ to, external = false, newTab = false, children, className }) => {
  if (external) {
    return (
      <StyledExternalLink
        href={to}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </StyledExternalLink>
    );
  }

  return (
    <StyledLink to={to} className={className}>
      {children}
    </StyledLink>
  );
};
