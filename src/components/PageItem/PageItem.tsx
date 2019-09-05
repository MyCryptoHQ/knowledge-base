import * as React from 'react';
import Link from 'gatsby-link';

interface Props {
  page: {
    title: string;
    slug: string;
    childMdx: {
      excerpt: string;
    };
  };
}

const PageItem: React.StatelessComponent<Props> = ({ page }) => (
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
