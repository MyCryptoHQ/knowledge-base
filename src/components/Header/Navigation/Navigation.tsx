import * as React from 'react';
import * as logo from '../../../assets/images/logo.svg';
import * as logo404 from '../../../assets/images/logo-404.svg';
import Link from 'gatsby-link';
import Search from '../../Search/Search';
import './Navigation.scss';

interface Props {
  showSearch: boolean;
  specialLogo: boolean;
}

const Navigation: React.StatelessComponent<Props> = ({ showSearch, specialLogo }) => (
  <div className="navigation container">
    <div className="row">
      <div className="col-xs-12 col-md-6 col-gutter-lr col-menu between-xs">
        <div className="branding">
          <Link to="/">
            <img src={specialLogo ? logo404 : logo} height={42} alt="MyCrypto logo" />
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="/" activeClassName="active">
              Knowledge base
            </Link>
          </li>
          <li>
            <Link to="/contact-us" activeClassName="active">
              Contact us
            </Link>
          </li>
          <li>
            <a href="https://mycrypto.com">Back to MyCrypto</a>
          </li>
        </ul>
      </div>
      {showSearch && (
        <div className="col-xs-12 col-md-offset-2 col-md-4 col-gutter-lr last-md xs-end align-end navigation-search">
          <Search />
        </div>
      )}
    </div>
  </div>
);

export default Navigation;
