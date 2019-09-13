import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  border-top: 0.0625em solid ${({ theme }) => theme.tableHeadBorder};
  border-bottom: 0.0625em solid ${({ theme }) => theme.tableHeadBorder};
  background: ${({ theme }) => theme.tableHeadBackground};
`;

const TableHead: FunctionComponent = ({ children, ...rest }) => (
  <StyledTableHead {...rest}>{children}</StyledTableHead>
);

export default TableHead;
