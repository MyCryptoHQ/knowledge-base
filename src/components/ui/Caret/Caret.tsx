import React, { FunctionComponent } from 'react';
import * as caret from '../../../assets/images/icons/caret.svg';
import styled from 'styled-components';

const StyledCaret = styled.img`
  height: 14px;
  vertical-align: middle;
`;

const Caret: FunctionComponent = () => <StyledCaret src={caret} />;

export default Caret;
