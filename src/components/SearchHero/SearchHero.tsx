import React, { FunctionComponent } from 'react';
import Search from '../Search';
import './SearchHero.scss';

const SearchHero: FunctionComponent = () => (
  <div className="hero container">
    <div className="row center-xs">
      <div className="col-xs hero-text align-center">How can we help you?</div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-10 col-sm-8 col-md-6">
        <Search compact={false} />
      </div>
    </div>
  </div>
);

export default SearchHero;
