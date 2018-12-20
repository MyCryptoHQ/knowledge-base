import * as React from 'react';
import * as classNames from 'classnames';
import './Center.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Center: React.StatelessComponent<Props> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'center')} {...props}>
    {children}
  </div>
);

export default Center;
