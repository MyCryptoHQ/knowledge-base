import styled from 'styled-components';

const HeaderButton = styled.li`
  display: inline-flex;
  align-items: center;
  height: 100%;
  color: white;
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;

  & > a {
    display: flex;
    align-items: center;
    height: 100%;
    color: inherit;
    padding: 0 2.5rem;
    transition: background 0.2s;

    :hover {
      color: inherit;
      background: ${({ theme }) => theme.navigationHover};
    }
  }
`;

export default HeaderButton;
