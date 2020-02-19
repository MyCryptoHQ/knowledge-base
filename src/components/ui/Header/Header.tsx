import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Navigation from '../../Navigation';

interface Props {
  showSearch?: boolean;
}

const StyledHeader = styled.header`
  min-height: 81px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textInverted};
  border-bottom: 3px solid ${({ theme }) => theme.primary};
`;

const Header: FunctionComponent<Props> = ({ showSearch = true, children }) => (
  <StyledHeader>
    <Navigation showSearch={showSearch} />
    {children}
  </StyledHeader>
);

export default Header;
