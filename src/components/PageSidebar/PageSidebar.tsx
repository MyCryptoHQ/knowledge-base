import { Button } from '@mycrypto/ui';
import { useLocation } from '@reach/router';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MYCRYPTO_EMAIL } from '../../config/links';
import breakpoint from '../../theme/breakpoints';
import { Link } from '../Link';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

const Aside = styled.aside`
  width: 100%;
  max-width: 40rem;
  min-width: 30rem;
  margin-left: 3rem;
  position: relative;

  ${breakpoint('md', 'max')`
    max-width: 100%;
    margin: 0;
  `};
`;

const Card = styled.div`
  padding: 3rem;
  background: ${({ theme }) => theme.tagBackground};
  position: sticky;
  top: 3rem;

  ${breakpoint('lg', 'max')`
    top: 11rem;
  `};
`;

const PageSidebar: FunctionComponent = () => {
  const { href } = useLocation();

  return (
    <Aside>
      <Card>
        <Heading as="h3">
          MyCrypto is the number one way to manage <u>all</u> of your Ethereum Accounts.
        </Heading>
        <Text>
          You can always email us for one-on-one help using{' '}
          <Link to={`mailto:${MYCRYPTO_EMAIL}?body=%0D%0A%0D%0A%0D%0ARef%3A%20${href}`} external={true}>
            support@mycrypto.com
          </Link>
          .
        </Text>
        {/* TODO: Uncomment when VIP support is live */}
        {/*<Text>
          If you are a{' '}
          <Link to={MYCRYPTO_MEMBERSHIP_PAGE} external={true}>
            MyCrypto Member
          </Link>
          , use your custom VIP Support Link on your{' '}
          <Link to={MYCRYPTO_DASHBOARD_PAGE} external={true}>
            MyCrypto Dashboard
          </Link>.
        </Text>*/}
        <Link to={`mailto:${MYCRYPTO_EMAIL}?body=%0D%0A%0D%0A%0D%0ARef%3A%20${href}`} external={true}>
          <Button>Send Us A Message</Button>
        </Link>
      </Card>
    </Aside>
  );
};

export default PageSidebar;
