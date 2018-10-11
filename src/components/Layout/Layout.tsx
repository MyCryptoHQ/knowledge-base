import * as React from 'react';
import MetaData from '../MetaData/MetaData';
import Footer from '../Footer/Footer';
import { StaticQuery, graphql } from 'gatsby';
import '../../sass/index.scss';

interface Props {
  className?: string;
  hideFooter?: boolean;
}

const Layout: React.StatelessComponent<Props> = ({
  children,
  className = '',
  hideFooter = false
}) => (
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

export default Layout;
