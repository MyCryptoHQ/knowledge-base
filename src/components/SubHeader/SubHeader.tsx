import * as React from 'react';
import './SubHeader.scss';

const SubHeader: React.StatelessComponent = ({ children }) => (
  <div className="sub-header">{children}</div>
);

export default SubHeader;
