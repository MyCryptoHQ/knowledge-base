import * as React from 'react';
import * as caret from '../../../../assets/images/icons/caret.svg';

const Caret: React.StatelessComponent = () => (
  <img src={caret} height={14} style={{ verticalAlign: 'middle' }} />
);

export default Caret;
