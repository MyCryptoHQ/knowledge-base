import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.td`
  min-width: 1em;
  padding: 1em;
`;

const TableCell: FunctionComponent = ({ children, ...rest }) => <StyledTableRow {...rest}>{children}</StyledTableRow>;

export default TableCell;
