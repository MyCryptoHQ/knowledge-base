import React, { FunctionComponent } from 'react';
import 'typeface-lato';
import 'typeface-source-code-pro';
import MetaData from '../MetaData/MetaData';
import Footer from '../Footer/Footer';
import './Layout.scss';
import '../../sass/index.scss';

interface Props {
  className?: string;
  hideFooter?: boolean;
}

const Layout: FunctionComponent<Props> = ({ children, className = '', hideFooter = false }) => {
  return (
    <div className={`layout row full-width ${className}`}>
      <MetaData />

      <div className="row full-width content">{children}</div>
      {!hideFooter && (
        <div className="row full-width bottom-xs">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
