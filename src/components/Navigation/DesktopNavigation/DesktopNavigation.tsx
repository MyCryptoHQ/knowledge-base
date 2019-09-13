import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Entry } from '../Navigation';
import breakpoint from '../../../theme/breakpoints';
import Link from '../../Link';
import Caret from '../../ui/Caret';

interface Props {
  entries: Entry[];
}

const StyledDesktopNavigation = styled.ul`
  margin: 0;
  padding: 0;

  ${breakpoint('lg', 'max')`
    display: none;
  `};
`;

const NavigationItem = styled.li`
  display: inline-block;
  margin-left: 2.7rem;

  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.textInverted};
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
`;

const DesktopNavigation: FunctionComponent<Props> = ({ entries }) => (
  <StyledDesktopNavigation>
    {entries.map(entry => (
      <NavigationItem key={entry.url}>
        <Link to={entry.url} external={entry.external}>
          {entry.title}
          <Caret />
        </Link>
      </NavigationItem>
    ))}
  </StyledDesktopNavigation>
);

export default DesktopNavigation;
