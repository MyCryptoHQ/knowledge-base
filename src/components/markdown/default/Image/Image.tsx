import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;

  &[align='right'] {
    padding-left: 2em;
  }

  &[align='left'] {
    padding-right: 2em;
  }
`;

const Image: FunctionComponent = ({ children, ...rest }) => (
  <StyledImage {...rest}>{children}</StyledImage>
);

export default Image;
