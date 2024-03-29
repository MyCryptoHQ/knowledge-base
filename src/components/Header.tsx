import { t } from '@lingui/macro';
import { Box, Header as UIHeader, HeaderButton, Logo } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { Link } from './Link';

export const Header: FunctionComponent = ({ children }) => (
  <UIHeader
    leftComponents={
      <Box
        sx={{
          p: {
            display: ['none', 'block']
          }
        }}>
        <Link to="https://app.mycrypto.com/?utm_medium=organic&utm_source=support&utm_campaign=nav" external={true}>
          <HeaderButton icon="home" text={t`app.mycrypto.com`} />
        </Link>
      </Box>
    }
    centerComponents={
      <Link to="/">
        <Logo minWidth={['130px', null, '200px']} maxWidth={['130px', null, '200px']} />
      </Link>
    }
    rightComponents={
      <Box
        sx={{
          p: {
            display: ['none', 'block']
          }
        }}>
        <Link to="mailto:support@mycrypto.com" external={true}>
          <HeaderButton icon="help" text={t`Contact`} />
        </Link>
        <Link to="https://blog.mycrypto.com" external={true}>
          <HeaderButton icon="present" text={t`Latest`} />
        </Link>
      </Box>
    }>
    {children}
  </UIHeader>
);
