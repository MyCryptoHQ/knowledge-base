import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../ui/Text';

interface Props {
  label: string;
  hasError?: boolean;
}

export const StyledField = styled(Text).attrs({ as: 'label' })`
  display: block;
  margin-bottom: 2rem;

  ${({ hasError }) =>
    hasError &&
    css`
      color: #ff433d;
    `};

  ${Text} {
    margin-bottom: 0.5rem;
  }
`;

const LabelTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Field: FunctionComponent<Props> = ({ label, hasError, children }) => (
  <StyledField hasError={hasError}>
    <LabelTitle>{label}</LabelTitle>
    {children}
  </StyledField>
);

export default Field;
