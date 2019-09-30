import styled from 'styled-components';

const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.controlBorder};
  margin: 0 30px;
`;

export default Divider;
