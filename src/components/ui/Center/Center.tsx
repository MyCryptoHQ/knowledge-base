import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCenter = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Center: FunctionComponent = ({ children }) => <StyledCenter>{children}</StyledCenter>;

export default Center;
