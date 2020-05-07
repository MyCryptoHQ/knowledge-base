import { transparentize } from 'polished';
import React, { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, useRef } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';

const InputContainer = styled.div`
  background: ${({ theme }) => theme.controlBackground};
  border: 2px solid ${({ theme }) => theme.controlBorder};
  border-radius: 0.25rem;
  transition: box-shadow 0.12s ease 0s;
  display: flex;
  align-items: center;
  cursor: text;

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => transparentize(0.35, theme.link)};
  }
`;

interface InputProps {
  withIcon: boolean;
}

export const StyledInput = styled(Text)<InputProps>`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: ${({ withIcon }) => (withIcon ? '1rem 1.5rem 1rem 0rem' : '1rem 1.5rem')};
  margin: 0 !important;

  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.55;
  }

  ${({ as }) =>
    as === 'textarea' &&
    css`
      resize: vertical;
    `};
`;

const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  padding: 1rem;
`;

interface OwnProps {
  icon?: string;
  as?: 'input' | 'select' | 'textarea' | 'file';
}

type Props = OwnProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FunctionComponent<Props> = ({ className, icon, as = 'input', ...rest }) => {
  const input = useRef<HTMLInputElement>();

  const handleClick = () => {
    input.current?.focus();
  };

  return (
    <InputContainer className={className} onClick={handleClick}>
      {icon && <Icon src={icon} />}
      <StyledInput ref={input} as={as as 'input' & 'select' & 'textarea' & 'file'} withIcon={!!icon} {...rest} />
    </InputContainer>
  );
};

export default Input;
