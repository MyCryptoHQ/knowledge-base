import React, { FunctionComponent } from 'react';
import CategoryItem from '../CategoryItem';
import chunk from 'lodash.chunk';
import { Category } from '../../models/category';
import './Categories.scss';

interface Props {
  categories: Category[];
}

const Categories: FunctionComponent<Props> = ({ categories }) => (
  <div className="categories">
    {chunk(categories, 2).map((categoryChunk, index) => (
      <div className="row" key={index}>
        {categoryChunk.map(category => (
          <div key={category.slug} className="category col-xs-12 col-md-6">
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Categories;
