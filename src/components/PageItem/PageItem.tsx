import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface Props {
  page: {
    title: string;
    slug: string;
    childMdx: {
      excerpt: string;
    };
  };
}

const PageItem: FunctionComponent<Props> = ({ page }) => (
  <div className="category-page">
    <Link to={`/${page.slug}`}>
      <div className="row">
        <div className="category-page-description col-xs col-no-gutter">
          <h3>{page.title}</h3>
          {page.childMdx.excerpt}
        </div>
      </div>
    </Link>
  </div>
);

export default PageItem;
