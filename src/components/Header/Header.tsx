import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import HeaderButton from './HeaderButton';

interface Props {
  left: ReactElement[];
  right: ReactElement[];
}

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 7.7rem;
  background: ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
  display: flex;
`;

interface HeaderButtonProps {
  position: 'flex-start' | 'center' | 'flex-end';
}

const HeaderButtons = styled.ul<HeaderButtonProps>`
  display: flex;
  justify-content: ${({ position }) => position};
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const HeaderBottom = styled(HeaderContainer)`
  justify-content: center;
`;

const Header: FunctionComponent<Props> = ({ left, right, children }) => (
  <header>
    <HeaderContainer>
      <HeaderButtons position="flex-start">
        {left.map((button, index) => (
          <HeaderButton key={`left-header-button-${index}`}>{button}</HeaderButton>
        ))}
      </HeaderButtons>
      <Logo />
      <HeaderButtons position="flex-end">
        {right.map((button, index) => (
          <HeaderButton key={`right-header-button-${index}`}>{button}</HeaderButton>
        ))}
      </HeaderButtons>
    </HeaderContainer>
    {children && (
      <HeaderBottom>
        <HeaderButtons position="center">{children}</HeaderButtons>
      </HeaderBottom>
    )}
  </header>
);

export default Header;
