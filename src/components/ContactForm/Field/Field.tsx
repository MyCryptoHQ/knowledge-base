import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../ui/Text';

interface Props {
  label: string;
  hasError?: boolean;
}

const StyledField = styled(Text).attrs({ as: 'label' })`
  display: block;
  margin-bottom: 2rem;
`;

const Field: FunctionComponent<Props> = ({ label, children }) => (
  <StyledField>
    {label} <br />
    {children}
  </StyledField>
);

export default Field;
