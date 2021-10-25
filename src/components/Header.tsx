import { t } from '@lingui/macro';
import { Header as UIHeader, HeaderButton, Logo } from '@mycrypto/ui';
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
        <Link to="mailto:support@mycrypto.com" external={true}>
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
