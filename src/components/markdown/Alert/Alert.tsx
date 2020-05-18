import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import infoIcon from '../../../assets/images/icons/info.svg';
import warningIcon from '../../../assets/images/icons/warning.svg';
import Text from '../../ui/Text';

type Type = 'info' | 'warning';

interface Props {
  type?: Type;
}

const getBackground = (type: Type): string => {
  switch (type) {
    case 'info':
      return 'white';
    case 'warning':
      return '#ffe47c';
  }
};

const getIcon = (type: Type): { src: string; alt: string } => {
  switch (type) {
    case 'info':
      return {
        src: infoIcon,
        alt: 'Info'
      };
    case 'warning':
      return {
        src: warningIcon,
        alt: 'Warning'
      };
  }
};

export const StyledAlert = styled.div<Required<Props>>`
  background: ${({ type }) => getBackground(type)};
  margin: 2rem 0;
  padding: 2.5rem 3rem;
  box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;

  ${Text} {
    margin: 0;
  }
`;

const Icon = styled.img`
  padding-right: 1.5rem;
  width: 3.2rem;
`;

const Alert: FunctionComponent<Props> = ({ type = 'info', children }) => (
  <StyledAlert type={type}>
    <Icon {...getIcon(type)} />
    {children}
  </StyledAlert>
);

export default Alert;
