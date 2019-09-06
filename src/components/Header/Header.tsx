import React, { FunctionComponent } from 'react';
import Navigation from './Navigation';
import './Header.scss';

interface Props {
  showSearch?: boolean;
}

const Header: FunctionComponent<Props> = ({ showSearch = true, children }) => (
  <div className="header">
    <Navigation showSearch={showSearch} />
    {children}
  </div>
);

export default Header;
