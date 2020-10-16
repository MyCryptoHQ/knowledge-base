import { Link as GatsbyLink } from 'gatsby';
import { FunctionComponent } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

interface Props {
  to: string;
  external?: boolean;
  newTab?: boolean;
  className?: string;
}

const linkCss = css`
  text-decoration: none;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.link};
  transition: color 0.2s;

  :hover {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.linkHover};
  }
`;

const StyledLink = styled(GatsbyLink)`
  ${linkCss};
`;

const StyledExternalLink = styled.a`
  ${linkCss};
`;

const Link: FunctionComponent<Props> = ({ to, external = false, newTab = false, children, className }) => {
  if (external) {
    return (
      <StyledExternalLink
        href={to}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={className}>
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

export default Link;
