import * as React from 'react';
import Link from 'gatsby-link';
import { Category } from '../../models/category';

interface Props {
  category: Category;
  showDescription?: boolean;
}

const CategoryItem: React.StatelessComponent<Props> = ({ category, showDescription = true }) => (
  <div className="category-item">
    <Link to={`/${category.slug}`}>
      <div className="row">
        <div className="category-image col-xs-2 col-no-gutter">
          <img src={category.childIconData.icon} alt={category.title} />
        </div>
        <div className="category-description col-xs col-no-gutter">
          <h3>{category.title}</h3>
          {showDescription && category.description}
          <div className="category-article-count">
            {category.childrenPage.length} article
            {category.childrenPage.length !== 1 && 's'}
            {category.childrenCategory.length > 0 && (
              <>
                , {category.childrenCategory.length}{' '}
                {category.childrenCategory.length === 1 ? 'category' : 'categories'}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default CategoryItem;
