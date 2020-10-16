import { FunctionComponent } from 'react';
import styled from 'styled-components';
import close from '../../../assets/images/icons/close.svg';
import open from '../../../assets/images/icons/hamburger.svg';
import breakpoint from '../../../theme/breakpoints';

interface Props {
  isOpen: boolean;

  onClick?(): void;
}

const ToggleWrapper = styled.div`
  justify-self: flex-start;
  align-self: center;
  flex: 1;

  ${breakpoint('lg')`
    display: none;
  `};
`;

const ToggleButton = styled.img`
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0 1.5rem;
`;

const Toggle: FunctionComponent<Props> = ({ isOpen, onClick }) => (
  <ToggleWrapper>
    <ToggleButton
      src={isOpen ? close : open}
      alt={isOpen ? 'Close menu button' : 'Open menu button'}
      onClick={onClick}
    />
  </ToggleWrapper>
);

export default Toggle;
