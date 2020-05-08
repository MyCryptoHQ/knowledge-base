import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  padding: 7px;
  outline: none;
  border: 1px solid #4d5f74;
  border-right: none;
  border-top-left-radius: ${({ theme }) => theme.borderRadiusLarge};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadiusLarge};
  background: #142c46;
  color: white;
  flex: 1;
`;

export default Input;
