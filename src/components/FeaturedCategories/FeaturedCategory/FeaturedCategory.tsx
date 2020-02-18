import React, { FunctionComponent } from 'react';
import { Category } from '../../../models/category';
import Link from '../../Link';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import styled from 'styled-components';

interface Props {
  category: Category;
  image: string;
}

const Wrapper = styled.div`
  background: white;
  width: 49.8rem;
  height: 22rem;
  margin-bottom: 1.1rem;
  transition: box-shadow 0.2s;

  ${Heading} {
    font-size: 2.3rem;
    margin-bottom: 0.75rem;
    transition: color 0.2s;
  }

  &:hover {
    box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);

    ${Heading} {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const StyledFeaturedCategoryItem = styled.div`
  width: 49.8rem;
  height: 22rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${({ image }) => image}) no-repeat;
`;

const FeaturedCategory: FunctionComponent<Props> = ({ category, image }) => (
  <Wrapper>
    <Link to={`/${category.slug}`}>
      <StyledFeaturedCategoryItem image={image}>
        <Heading as="h2">{category.title}</Heading>
        <Text noMargin={true}>{category.description}</Text>
      </StyledFeaturedCategoryItem>
    </Link>
  </Wrapper>
);

export default FeaturedCategory;
