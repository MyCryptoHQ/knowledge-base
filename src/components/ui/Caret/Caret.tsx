import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import * as caret from '../../../assets/images/icons/caret.svg';

const StyledCaret = styled.img`
  height: 14px;
  vertical-align: middle;
`;

const Caret: FunctionComponent = () => <StyledCaret src={caret} />;

export default Caret;
