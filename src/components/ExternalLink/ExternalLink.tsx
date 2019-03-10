import * as React from 'react';

interface OwnProps {
  to: string;
  currentTab?: boolean;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Props = OwnProps &
  Omit<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  >;

const ExternalLink: React.StatelessComponent<Props> = ({
  to,
  children,
  currentTab = false,
  ...props
}) => (
  <a href={to} target={currentTab ? '_self' : '_blank'} rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

export default ExternalLink;
