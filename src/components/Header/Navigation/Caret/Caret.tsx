import React, { FunctionComponent } from 'react';
import * as caret from '../../../../assets/images/icons/caret.svg';

const Caret: FunctionComponent = () => (
  <img src={caret} height={14} style={{ verticalAlign: 'middle' }} />
);

export default Caret;
