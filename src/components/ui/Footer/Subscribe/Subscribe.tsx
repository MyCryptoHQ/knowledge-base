import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useSubscribe } from '../../../../hooks';
import Link from '../../../Link';
import Heading from '../../Heading';
import Text from '../../Text';
import Input from './Input';

const SubscribeSection = styled.section`
  margin-top: 2rem;

  ${Text} {
    font-size: 1.4rem !important;
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const SubscribeButton = styled.button`
  height: 40px;
  background: #027796;
  border: none;
  color: white;
  border-top-right-radius: ${({ theme }) => theme.borderRadiusLarge};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadiusLarge};
`;

const PrivacyPolicyText = styled(Text)`
  a {
    color: inherit;
    text-decoration: underline;

    :hover {
      color: inherit;
    }
  }

  em {
    font-size: 1.12rem !important;
  }
`;

const SUBSCRIBE_LIST_ID = '7dd574156f';
const SUBSCRIBE_TAG = 'support.mycrypto.com';

const Subscribe: FunctionComponent = () => {
  const subscribe = useSubscribe(SUBSCRIBE_LIST_ID, SUBSCRIBE_TAG);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [isSubscribed, setSubscribed] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(false);
    setError(false);

    subscribe(emailAddress)
      .then(() => setSubscribed(true))
      .catch(() => setError(true));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubscribed(false);
    setError(false);
    setEmailAddress(event.target.value);
  };

  return (
    <SubscribeSection>
      <Heading as="h2">Subscribe to MyCrypto</Heading>
      <Text>Get updates from MyCrypto straight to your inbox!</Text>
      <SubscribeForm onSubmit={handleSubscribe}>
        <Input type="text" placeholder="Email address" onChange={handleChange} aria-label="Email address" />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </SubscribeForm>
      {isSubscribed && <Text>Your email was added to our mailing list!</Text>}
      {isError && <Text>Your email could not be added to the mailing list. You may be subscribed already.</Text>}
      <PrivacyPolicyText>
        <em>
          By submitting your email, you <strong>affirmatively</strong> agree to our{' '}
          <Link to="https://about.mycrypto.com/privacy/" external={true}>
            Privacy Policy
          </Link>
          .
        </em>
      </PrivacyPolicyText>
    </SubscribeSection>
  );
};

export default Subscribe;
