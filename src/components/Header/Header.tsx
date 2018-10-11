import * as React from 'react';
import Navigation from './Navigation/Navigation';
import './Header.scss';

interface Props {
  showSearch?: boolean;
  specialLogo?: boolean;
}

const Header: React.StatelessComponent<Props> = ({
  showSearch = true,
  specialLogo = false,
  children
}) => (
  <div className="header">
    <Navigation showSearch={showSearch} specialLogo={specialLogo} />
    {children}
  </div>
);

export default Header;
