import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import { Yaml } from '../../types/category';
import CategoryItemCount from '../CategoryItemCount';
import Link from '../Link';
import Heading from '../ui/Heading';

interface Props {
  category: Yaml;
}

const CategoryContainer = styled.div`
  a {
    display: block;
    padding: 1.8rem;
    margin-left: -1.8rem;
    transition: box-shadow 0.2s, background 0.2s;

    :hover {
      background: white;
      box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);
    }

    ${breakpoint('lg', 'max')`
      background: white;
      box-shadow: 0 4px 9px -2px rgba(0, 0, 0, 0.2);
      margin-bottom: 1.5rem;
      margin-left: 0rem;
    `};
  }
`;

const CategoryHeading = styled(Heading)`
  font-size: 2rem;
  vertical-align: middle;
  margin-right: 1.5rem;
  margin-bottom: 0;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${breakpoint('lg', 'max')`
    justify-content: space-between;
  `};
`;

const CategoryItem: FunctionComponent<Props> = ({ category }) => (
  <CategoryContainer>
    <Link to={`/${category.slug}`}>
      <CategoryItemWrapper>
        <CategoryHeading as="h3">{category.title}</CategoryHeading>
        <CategoryItemCount category={category} />
      </CategoryItemWrapper>
    </Link>
  </CategoryContainer>
);

export default CategoryItem;
