import { t } from '@lingui/macro';
import { HeaderButton, Logo, Header as UIHeader } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Link } from './Link';

export const Header: FunctionComponent = ({ children }) => (
  <UIHeader
    leftComponents={
      <Link to="https://app.mycrypto.com" external={true}>
        <HeaderButton icon="home" text={t`app.mycrypto.com`} />
      </Link>
    }
    centerComponents={
      <Link to="/">
        <Logo />
      </Link>
    }
    rightComponents={
      <>
        <Link to="/contact-us">
          <HeaderButton icon="help" text={t`Contact`} />
        </Link>
        <Link to="https://blog.mycrypto.com" external={true}>
          <HeaderButton icon="present" text={t`Latest`} />
        </Link>
      </>
    }
  >
    {children}
  </UIHeader>
);
