import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import * as classNames from 'classnames';
import ExternalLink from '../../../ExternalLink';
import Caret from '../Caret';
import './MobileNavigation.scss';

interface Props {
  isVisible: boolean;
}

const MobileNavigation: FunctionComponent<Props> = ({ isVisible }) => (
  <div className={classNames('mobile-navigation', { visible: isVisible })}>
    <ul className="mobile-menu">
      <li>
        <Link to="/">
          Knowledge base
          <Caret />
        </Link>
      </li>
      <li>
        <Link to="/contact-us">
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
);

export default MobileNavigation;
