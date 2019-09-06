import React, { FunctionComponent } from 'react';
import * as classNames from 'classnames';
import './Center.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Center: FunctionComponent<Props> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'center')} {...props}>
    {children}
  </div>
);

export default Center;
