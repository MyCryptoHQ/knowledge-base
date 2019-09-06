import React, { FunctionComponent, useEffect, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Category } from '../../../../models/category';
import Center from '../../../ui/Center';
import Card from '../../../ui/Card';
import './FeaturedCategoryItem.scss';

interface Props {
  category: Category;
}

interface QueryData {
  allFile: {
    edges: {
      node: {
        relativePath: string;
        publicURL: string;
      };
    }[];
  };
}

const FeaturedCategoryItem: FunctionComponent<Props> = ({ category }) => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            publicURL
          }
        }
      }
    }
  `);

  const [icon, setIcon] = useState<string>();

  useEffect(
    () => {
      const iconNode = data.allFile.edges
        .map(edge => edge.node)
        .find(node => node.relativePath === `icons/${category.icon}.svg`);

      if (iconNode) {
        setIcon(iconNode.publicURL);
      }
    },
    [data.allFile.edges]
  );

  return (
    <Link to={`/${category.slug}`} className="featured-category-item-wrapper">
      <Card className="featured-category-item">
        <Center>
          <div className="row">
            <div className="col-xs featured-category-item-image">
              {icon && <img src={icon} alt={category.title} />}
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
};

export default FeaturedCategoryItem;
