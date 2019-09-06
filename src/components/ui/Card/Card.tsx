import React, { FunctionComponent } from 'react';
import * as classNames from 'classnames';
import './Card.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'card')} {...props}>
    {children}
  </div>
);

export default Card;
