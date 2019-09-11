import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Panel } from '@mycrypto/ui';
import { Category } from '../../../../models/category';
import Heading from '../../../ui/Heading';
import Text from '../../../ui/Text';
import Link from '../../../Link';

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

const StyledFeaturedCategoryItem = styled(Panel)`
  max-width: 100%;
  height: 19.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
`;

const CategoryImage = styled.img`
  width: 50px;
  margin: auto auto 1.5em;
`;

const CategoryDescription = styled.div`
  ${Heading} {
    font-size: 2.3rem;
    margin-bottom: 0.75rem;
  }
`;

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
    <Link to={`/${category.slug}`}>
      <StyledFeaturedCategoryItem>
        {icon && <CategoryImage src={icon} alt={category.title} />}
        <CategoryDescription>
          <Heading as="h2">{category.title}</Heading>
          <Text noMargin={true}>{category.description}</Text>
        </CategoryDescription>
      </StyledFeaturedCategoryItem>
    </Link>
  );
};

export default FeaturedCategoryItem;
