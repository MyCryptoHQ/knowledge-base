import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../../hooks';
import { setDrawerOpen } from '../../store/navigation';
import breakpoint from '../../theme/breakpoints';
import Drawer from './Drawer';
import HeaderButton from './HeaderButton';
import Logo from './Logo';
import Toggle from './Toggle';

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

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 7.7rem;
  background: ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
  display: flex;
`;

const HeaderButtons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${({ theme }) => breakpoint('lg', 'max')`
    justify-content: normal;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${theme.headerBorder};
  `};
`;

const HeaderBottom = styled(HeaderContainer)`
  justify-content: center;

  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

interface DesktopButtonsProps {
  position: 'flex-start' | 'center' | 'flex-end';
}

const DesktopButtons = styled.div<DesktopButtonsProps>`
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
  const isDrawerOpen = useSelector(state => state.navigation.isDrawerOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setDrawerOpen(!isDrawerOpen));
  };

  const handleClose = () => {
    dispatch(setDrawerOpen(false));
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
        <HeaderButton key={`right-header-button-${index}`}>{button}</HeaderButton>
      ))}
    </HeaderButtons>
  );

  return (
    <HeaderWrapper>
      <Drawer isOpen={isDrawerOpen}>
        {navigationMenu}
        {leftMenu}
        {rightMenu}
      </Drawer>

      <HeaderContainer>
        <Toggle isOpen={isDrawerOpen} onClick={handleToggle} />
        <LeftDesktopButtons position="flex-start">{leftMenu}</LeftDesktopButtons>
        <Logo />
        <DesktopButtons position="flex-end">{rightMenu}</DesktopButtons>
      </HeaderContainer>

      <HeaderBottom>{navigationMenu}</HeaderBottom>
    </HeaderWrapper>
  );
};

export default Header;
