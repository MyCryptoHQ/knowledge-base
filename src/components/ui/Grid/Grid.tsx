import styled from 'styled-components';

interface Props {
  columnSize: string;
  gapSize?: string;
}

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ columnSize }) => columnSize}, 1fr));
  grid-gap: ${({ gapSize = '1rem' }) => gapSize};
`;

export default Grid;
