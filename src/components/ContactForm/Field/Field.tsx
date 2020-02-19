import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../ui/Text';

interface Props {
  label: string;
  hasError?: boolean;
}

const StyledField = styled(Text).attrs({ as: 'label' })`
  display: block;
  margin-bottom: 2rem;

  ${({ hasError }) =>
    hasError &&
    css`
      color: #ff433d;
    `};
`;

const Field: FunctionComponent<Props> = ({ label, hasError, children }) => (
  <StyledField hasError={hasError}>
    <strong>{label}</strong> <br />
    {children}
  </StyledField>
);

export default Field;
