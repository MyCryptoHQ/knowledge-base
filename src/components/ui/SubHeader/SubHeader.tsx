import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Container from '../Container';

const StyledSubHeader = styled.div`
  min-height: 50px;
  background: ${({ theme }) => theme.subHeaderBackground};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
`;

const SubHeader: FunctionComponent = ({ children, ...rest }) => (
  <StyledSubHeader {...rest}>
    <Container>{children}</Container>
  </StyledSubHeader>
);

export default SubHeader;
