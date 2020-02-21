import React, { FunctionComponent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import HeaderButton from './HeaderButton';
import breakpoint from '../../theme/breakpoints';
import Toggle from './Toggle';
import Drawer from './Drawer';
import Logo from './Logo';

interface Props {
  left: ReactElement[];
  right: ReactElement[];
  navigation: ReactElement[];
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 1;

  ${breakpoint('lg', 'max')`
    position: fixed;
  `};
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 7.7rem;
  background: ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
  display: flex;
`;

const HeaderButtons = styled.ul<HeaderButtonProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${breakpoint('lg', 'max')`
    justify-content: normal;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
  `};
`;

const HeaderBottom = styled(HeaderContainer)`
  justify-content: center;

  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

interface HeaderButtonProps {
  position: 'flex-start' | 'center' | 'flex-end';
}

const DesktopButtons = styled.div<HeaderButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ position }) => position};
  flex: 1;

  ${breakpoint('lg', 'max')`
    & > ${HeaderButtons} {
      display: none;
    }
  `};
`;

const LeftDesktopButtons = styled(DesktopButtons)`
  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

const Header: FunctionComponent<Props> = ({ left, right, navigation }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigationMenu = (
    <HeaderButtons>
      {navigation.map((button, index) => (
        <HeaderButton key={`navigation-button-${index}`} onClick={handleClose}>
          {button}
        </HeaderButton>
      ))}
    </HeaderButtons>
  );

  const leftMenu = (
    <HeaderButtons>
      {left.map((button, index) => (
        <HeaderButton key={`left-header-button-${index}`} onClick={handleClose}>
          {button}
        </HeaderButton>
      ))}
    </HeaderButtons>
  );

  const rightMenu = (
    <HeaderButtons>
      {right.map((button, index) => (
        <HeaderButton key={`right-header-button-${index}`} onClick={handleClose}>
          {button}
        </HeaderButton>
      ))}
    </HeaderButtons>
  );

  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen}>
        {navigationMenu}
        {leftMenu}
        {rightMenu}
      </Drawer>

      <HeaderContainer>
        <Toggle isOpen={isOpen} onClick={handleToggle} />
        <LeftDesktopButtons position="flex-start">{leftMenu}</LeftDesktopButtons>
        <Logo />
        <DesktopButtons position="flex-end">{rightMenu}</DesktopButtons>
      </HeaderContainer>

      <HeaderBottom>{navigationMenu}</HeaderBottom>
    </HeaderWrapper>
  );
};

export default Header;
