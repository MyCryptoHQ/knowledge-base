import styled from 'styled-components';

const Divider = styled.div`
  width: 2px;
  height: 220px;
  background: ${({ theme }) => theme.footerBorder};
  margin: 0 30px;
`;

export default Divider;
