import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../ui/Text';

const StyledContributing = styled.div`
  text-align: center;
  height: 50px;
  background: ${({ theme }) => theme.subHeaderBackground};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Contributing: FunctionComponent = () => (
  <StyledContributing>
    <Text small={true} muted={true}>
      Are you a developer and looking to contribute to MyCrypto? See{' '}
      <Link to="/developers">our guides for developers and contributors.</Link>
    </Text>
  </StyledContributing>
);

export default Contributing;
