import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import * as logo from '../../../assets/images/logo.svg';
import * as bars from '../../../assets/images/icons/bars.svg';
import * as close from '../../../assets/images/icons/close.svg';
import Search from '../../Search';
import MobileNavigation from './MobileNavigation';
import ExternalLink from '../../ExternalLink';
import Caret from './Caret';
import './Navigation.scss';

interface Props {
  showSearch: boolean;
}

const Navigation: FunctionComponent<Props> = ({ showSearch }) => {
  const [isMobileVisible, setMobileVisible] = useState<boolean>(false);

  const handleClick = () => {
    setMobileVisible(!isMobileVisible);
  };

  return (
    <div className="navigation container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-gutter-lr">
          <MobileNavigation isVisible={isMobileVisible} />
          <div className="hamburger-toggle show-xs-only" onClick={handleClick}>
            <img src={(isMobileVisible && close) || bars} />
          </div>
          <div className="branding">
            <Link to="/">
              <img src={logo} height={42} alt="MyCrypto logo" />
            </Link>
          </div>
          <ul className="menu hide-xs-only">
            <li>
              <Link to="/" activeClassName="active">
                Knowledge base
                <Caret />
              </Link>
            </li>
            <li>
              <Link to="/contact-us" activeClassName="active">
                Contact us
                <Caret />
              </Link>
            </li>
            <li>
              <ExternalLink to="https://mycrypto.com" currentTab={true}>
                Back to MyCrypto
                <Caret />
              </ExternalLink>
            </li>
          </ul>
        </div>
        {showSearch && (
          <div className="col-xs-12 col-md-offset-2 col-md-4 col-gutter-lr last-md xs-end align-end navigation-search">
            <Search compact={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
