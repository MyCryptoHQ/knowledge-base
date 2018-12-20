import * as React from 'react';
import * as classNames from 'classnames';
import './Card.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card: React.StatelessComponent<Props> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'card')} {...props}>
    {children}
  </div>
);

export default Card;
