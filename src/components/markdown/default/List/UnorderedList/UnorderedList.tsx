import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import List from '../index';

const StyledUnorderedList = styled(List).attrs({ as: 'ul' })`
  list-style-type: disc;

  & & {
    margin: 0;
    list-style-type: circle;
  }

  & & & {
    list-style-type: square;
  }
`;

const UnorderedList: FunctionComponent = ({ children, ...rest }) => (
  <StyledUnorderedList {...rest}>{children}</StyledUnorderedList>
);

export default UnorderedList;
