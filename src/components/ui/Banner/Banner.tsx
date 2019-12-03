import * as React from 'react';
import * as classNames from 'classnames';
import * as icon from '../../../assets/images/announcement.svg';
import './Banner.scss';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Banner: React.StatelessComponent<Props> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'banner')} {...props}>
    <img src={icon} alt="Announcement" />
    {children}
  </div>
);

export default Banner;
