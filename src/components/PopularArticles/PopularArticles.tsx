import React, { FunctionComponent } from 'react';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import PopularArticle from './PopularArticle';
import styled from 'styled-components';
import { POPULAR_ARTICLES } from '../../config/articles';
import breakpoint from '../../theme/breakpoints';

const PaddedHeading = styled(Heading)`
  padding-left: 2.4rem;
`;

const CategoriesSection = styled(Section)`
  ${breakpoint('lg', 'max')`
    padding: 0 0 4.6rem 0;
  `};
`;

const PopularArticles: FunctionComponent = () => (
  <CategoriesSection>
    <PaddedHeading as="h2">Popular Articles</PaddedHeading>
    {POPULAR_ARTICLES.map(slug => (
      <PopularArticle slug={slug} />
    ))}
  </CategoriesSection>
);

export default PopularArticles;
