import * as React from 'react';
import { Category } from '../../../models/category';
import FeaturedCategoryItem from './FeaturedCategoryItem/FeaturedCategoryItem';

interface Props {
  category: string;
  categories: Category[];
}

interface State {
  category?: Category;
}

export default class FeaturedCategory extends React.PureComponent<Props, State> {
  componentWillMount() {
    const { category, categories } = this.props;
    this.setState({
      category: categories.find(c => c.slug === `${category}`)
    });
  }

  render() {
    const { category } = this.state;
    if (category) {
      return <FeaturedCategoryItem category={category} />;
    }
    return null;
  }
}
