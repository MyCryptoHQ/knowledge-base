import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 3rem 0;
`;

const Table: FunctionComponent = ({ children, ...rest }) => <StyledTable {...rest}>{children}</StyledTable>;

export default Table;
