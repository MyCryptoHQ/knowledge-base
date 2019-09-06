import React, { FunctionComponent } from 'react';

interface OwnProps {
  to: string;
  currentTab?: boolean;
}

type Props = OwnProps &
  Omit<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  >;

const ExternalLink: FunctionComponent<Props> = ({ to, children, currentTab = false, ...props }) => (
  <a href={to} target={currentTab ? '_self' : '_blank'} rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

export default ExternalLink;
