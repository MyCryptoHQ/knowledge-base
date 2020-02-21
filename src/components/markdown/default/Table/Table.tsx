import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  display: block;
  width: 100%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Table: FunctionComponent = ({ children, ...rest }) => <StyledTable {...rest}>{children}</StyledTable>;

export default Table;
