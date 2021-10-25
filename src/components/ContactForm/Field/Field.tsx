import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  label: string;
  hasError?: boolean;
}

interface FieldProps {
  hasError: boolean;
  as: string;
}

export const StyledField = styled(Body)<FieldProps>`
  display: block;
  margin-bottom: 2rem;

  ${({ hasError }) =>
    hasError &&
    css`
      color: #ff433d;
    `};
`;

const LabelTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Field: FunctionComponent<Props> = ({ label, hasError, children }) => (
  <StyledField as="label" hasError={hasError ?? false}>
    <LabelTitle>{label}</LabelTitle>
    {children}
  </StyledField>
);

export default Field;
