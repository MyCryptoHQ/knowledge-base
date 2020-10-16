import { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

interface Props {
  isOpen: boolean;
}

const DrawerContainer = styled.div<Props>`
  position: fixed;
  top: 7.7rem;
  bottom: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-40rem')};
  z-index: 10;
  width: 40rem;
  background: ${({ theme }) => theme.secondary};
  transition: left 0.5s;
  border-top: 1px solid ${({ theme }) => theme.headerBorder};

  ${breakpoint('lg')`
    display: none;
  `};
`;

const Drawer: FunctionComponent<Props> = ({ isOpen, children }) => (
  <DrawerContainer isOpen={isOpen}>{children}</DrawerContainer>
);

export default Drawer;
