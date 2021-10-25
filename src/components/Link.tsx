import { Text, TextProps } from '@mycrypto/ui';
import { Link as GatsbyLink } from 'gatsby';
import { FunctionComponent } from 'react';

export interface LinkProps {
  to: string;
  external?: boolean;
  newTab?: boolean;
}

const BaseLink: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Text
    color="link"
    display="inline"
    sx={{
      textDecoration: 'none',
      transition: 'color 0.2s',
      ':hover': {
        color: 'button.primary.hover'
      }
    }}
    {...props}>
    {children}
  </Text>
);

export const Link: FunctionComponent<LinkProps> = ({ to, external = false, newTab = false, children }) => {
  if (external) {
    return (
      <BaseLink as="a" href={to} target={newTab ? '_blank' : '_self'} rel="noopener noreferrer">
        {children}
      </BaseLink>
    );
  }

  return (
    // @ts-expect-error Issue with Rebass types
    <BaseLink as={GatsbyLink} to={to}>
      {children}
    </BaseLink>
  );
};
