import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  border-bottom: 0.0625em solid ${({ theme }) => theme.tableRowBorder};
`;

const TableRow: FunctionComponent = ({ children, ...rest }) => <StyledTableRow {...rest}>{children}</StyledTableRow>;

export default TableRow;
