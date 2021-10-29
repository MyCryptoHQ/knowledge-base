import { FunctionComponent } from 'react';
import { Link as BaseLink } from '../../Link';

export interface LinkProps {
  href: string;
}

export const Link: FunctionComponent<LinkProps> = ({ href, children, ...props }) => (
  <BaseLink to={href} external={true} {...props}>
    {children}
  </BaseLink>
);
