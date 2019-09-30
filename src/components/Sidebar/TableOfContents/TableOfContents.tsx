import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TableOfContents as TableOfContentsData } from '../../../models/page';
import Text from '../../ui/Text';

interface Props {
  tableOfContents: TableOfContentsData;
}

const StyledTableOfContents = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled(Text)``;

const TableOfContents: FunctionComponent<Props> = ({ tableOfContents: { items } }) => (
  <StyledTableOfContents>
    {items.map(item => (
      <Item key={item.url}>
        <a href={item.url}>{item.title}</a>
      </Item>
    ))}
  </StyledTableOfContents>
);

export default TableOfContents;
