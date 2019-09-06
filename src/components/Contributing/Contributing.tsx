import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import './Contributing.scss';

const Contributing: FunctionComponent = () => (
  <div className="contributing">
    <div className="row">
      <div className="col-xs-12 col-gutter-lr">
        <p>
          Are you a developer and looking to contribute to MyCrypto? See{' '}
          <Link to="/developers">our guides for developers and contributors.</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Contributing;
