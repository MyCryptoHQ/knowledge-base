import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'gatsby';
import './MobileNavigation.scss';
import ExternalLink from '../../../ExternalLink/ExternalLink';
import Caret from '../Caret/Caret';

interface Props {
  isVisible: boolean;
}

const MobileNavigation: React.StatelessComponent<Props> = ({ isVisible }) => (
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
        <ExternalLink to="https://mycrypto.com">
          Back to MyCrypto
          <Caret />
        </ExternalLink>
      </li>
    </ul>
  </div>
);

export default MobileNavigation;
