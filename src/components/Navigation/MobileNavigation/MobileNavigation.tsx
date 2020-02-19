import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Entry } from '../Navigation';
import Link from '../../Link';
import Caret from '../../ui/Caret';
import breakpoint from '../../../theme/breakpoints';
import closeIcon from '../../../assets/images/icons/close.svg';
import barsIcon from '../../../assets/images/icons/bars.svg';
import { lighten } from 'polished';

interface Props {
  entries: Entry[];
}

const MobileNavigationWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 320px;
  top: 9.2rem;
  bottom: 0;
  left: ${({ isVisible }) => (isVisible ? '0' : '-320px')};
  transition: left 0.5s ease;
  background: ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.secondary)};
  box-sizing: border-box;
  padding: 2.5rem 3%;

  ${breakpoint('lg')`
    display: none;
  `};
`;

const StyledMobileNavigation = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  display: block;

  &:not(:last-of-type) {
    margin-bottom: 2.2rem;
  }

  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.textInverted};
    font-weight: 300;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    :hover {
      color: ${({ theme }) => theme.textInverted};
    }
  }
`;

const FlexWrapper = styled.div`
  flex: 1;

  ${breakpoint('lg')`
    display: none;
  `};
`;

const NavigationToggle = styled.img`
  width: 26px;
  height: 26px;
  vertical-align: middle;

  ${breakpoint('lg')`
    display: none;
  `};
`;

const MobileNavigation: FunctionComponent<Props> = ({ entries }) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <FlexWrapper>
        <NavigationToggle src={isToggled ? closeIcon : barsIcon} onClick={handleToggle} />
      </FlexWrapper>
      <MobileNavigationWrapper isVisible={isToggled}>
        <StyledMobileNavigation>
          {entries.map(entry => (
            <NavigationItem key={entry.url}>
              <Link to={entry.url} external={entry.external}>
                {entry.title}
                <Caret />
              </Link>
            </NavigationItem>
          ))}
        </StyledMobileNavigation>
      </MobileNavigationWrapper>
    </>
  );
};

export default MobileNavigation;
