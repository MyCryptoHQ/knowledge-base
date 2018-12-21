import * as React from 'react';
import Navigation from './Navigation/Navigation';
import './Header.scss';

interface Props {
  showSearch?: boolean;
}

const Header: React.StatelessComponent<Props> = ({ showSearch = true, children }) => (
  <div className="header">
    <Navigation showSearch={showSearch} />
    {children}
  </div>
);

export default Header;
