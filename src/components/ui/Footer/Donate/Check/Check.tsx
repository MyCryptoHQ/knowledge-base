import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCheck = styled.span`
  margin-right: 7px;
  color: #7ad832;
`;

const Check: FunctionComponent = () => <StyledCheck>✓</StyledCheck>;

export default Check;
