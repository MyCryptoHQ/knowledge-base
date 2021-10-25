import { Body } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledTableHeading = styled(Body)`
  min-width: 1em;
  padding: 1em;
  color: ${({ theme }) => theme.headline};
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
`;

const TableHeading: FunctionComponent = ({ children, ...rest }) => (
  <StyledTableHeading as="th" {...rest}>
    {children}
  </StyledTableHeading>
);

export default TableHeading;
