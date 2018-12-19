import * as React from 'react';
import { Category } from '../../../../models/category';
import Center from '../../../ui/Center/Center';
import Card from '../../../ui/Card/Card';
import './FeaturedCategoryItem.scss';
import { Link } from 'gatsby';

interface Props {
  category: Category;
}

const FeaturedCategoryItem: React.StatelessComponent<Props> = ({ category }) => (
  <Link to={category.slug} className="featured-category-item-wrapper">
    <Card className="featured-category-item">
      <Center>
        <div className="row">
          <div className="col-xs featured-category-item-image">
            <img src={category.childIconData.icon} alt={category.title} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs featured-category-item-description">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
        </div>
      </Center>
    </Card>
  </Link>
);

export default FeaturedCategoryItem;
